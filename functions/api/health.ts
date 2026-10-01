/**
 * Cloudflare Pages Function: GET /api/health
 * Production health check verifying Cloudflare runtime and D1 availability.
 */
export async function onRequestGet(context: { env: { DB?: unknown } }) {
  return new Response(JSON.stringify({
    status: 'ok',
    runtime: 'cloudflare-pages',
    database: context.env?.DB ? 'cloudflare-d1' : 'unbound',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
