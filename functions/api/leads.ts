import { D1Database } from '../../server/types';
import { CloudflareD1LeadRepository } from '../../server/repositories/d1LeadRepository';
import { handleCreateLead } from '../../server/leadController';

interface Env {
  DB?: D1Database;
  TURNSTILE_SECRET_KEY?: string;
}

/**
 * Cloudflare Pages Function: POST /api/leads
 * Handles lead submission in Cloudflare Pages production environment backed by D1.
 */
export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const data = await context.request.json() as Record<string, unknown>;

    // Cloudflare Turnstile Verification (if configured in Cloudflare environment)
    if (context.env?.TURNSTILE_SECRET_KEY && data.turnstileToken && typeof data.turnstileToken === 'string') {
      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(context.env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(data.turnstileToken)}`
      });
      const outcome = await turnstileRes.json() as { success: boolean };
      if (!outcome.success) {
        return new Response(JSON.stringify({ success: false, error: 'Security verification failed. Please try again.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Verify Cloudflare D1 database binding
    if (!context.env?.DB) {
      console.error('Cloudflare D1 database binding (DB) is missing.');
      return new Response(JSON.stringify({
        success: false,
        error: 'Production database is not configured. Please ensure D1 binding "DB" is attached in Cloudflare Pages settings.'
      }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const clientIp = context.request.headers.get('CF-Connecting-IP') || '127.0.0.1';
    const repository = new CloudflareD1LeadRepository(context.env.DB);
    const result = await handleCreateLead(data, repository, clientIp);

    return new Response(JSON.stringify(result.body), {
      status: result.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: unknown) {
    console.error('Unhandled error in Pages Function POST /api/leads:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'Unable to process inquiry at this moment. Please try again later.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
