import crypto from 'crypto';
import { CreateLeadInput, LeadRecord, LeadRepository } from './types';

// Rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 10; // Max 10 submissions per 10 min

/**
 * Checks client IP rate limit.
 * Note: This in-memory limiter operates within the active process.
 * In distributed Cloudflare edge deployments, Cloudflare Rate Limiting rules or KV/Turnstile provide edge protection.
 */
export const isRateLimited = (clientIp: string): boolean => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitMap.get(clientIp) || []).filter((t) => t > windowStart);

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(clientIp, timestamps);
  return false;
};

/**
 * Server-side input validation and sanitization.
 */
export const validateLeadInput = (input: unknown): { isValid: boolean; errors: Record<string, string>; sanitized?: CreateLeadInput } => {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== 'object') {
    return { isValid: false, errors: { form: 'Invalid request payload.' } };
  }

  const data = input as Record<string, unknown>;

  // Honeypot check
  if (data.hpWebsite && typeof data.hpWebsite === 'string' && data.hpWebsite.trim().length > 0) {
    return { isValid: false, errors: { hpWebsite: 'Spam detected.' } };
  }

  // Full Name
  const fullName = typeof data.fullName === 'string' ? data.fullName.trim() : '';
  if (!fullName || fullName.length < 2 || fullName.length > 100) {
    errors.fullName = 'Full Name must be between 2 and 100 characters.';
  }

  // Email
  const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 255) {
    errors.email = 'Please provide a valid email address.';
  }

  // Phone
  const rawPhone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const phoneDigits = rawPhone.replace(/\D/g, '');
  if (!rawPhone || phoneDigits.length < 8 || rawPhone.length > 30) {
    errors.phone = 'Please provide a valid contact number (at least 8 digits).';
  }

  // Current Technology
  const currentTechnology = typeof data.currentTechnology === 'string' ? data.currentTechnology.trim() : '';
  if (!currentTechnology || currentTechnology.length < 2 || currentTechnology.length > 100) {
    errors.currentTechnology = 'Please specify your current technology stack.';
  }

  // Years of Experience
  const validExpRanges = ['1-3', '3-5', '5-8', '8-12', '12+'];
  const yearsOfExperience = typeof data.yearsOfExperience === 'string' ? data.yearsOfExperience.trim() : '';
  if (!yearsOfExperience || !validExpRanges.includes(yearsOfExperience)) {
    errors.yearsOfExperience = 'Please select a valid experience range.';
  }

  // Target Technology (must allow 'I am not sure yet')
  const targetTechnology = typeof data.targetTechnology === 'string' ? data.targetTechnology.trim() : '';
  if (!targetTechnology || targetTechnology.length < 2 || targetTechnology.length > 100) {
    errors.targetTechnology = 'Please specify or select a target technology area.';
  }

  // Message (optional)
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  if (message.length > 2000) {
    errors.message = 'Message must not exceed 2000 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    sanitized: {
      fullName,
      email,
      phone: rawPhone,
      currentTechnology,
      yearsOfExperience,
      targetTechnology,
      message: message || undefined,
      turnstileToken: typeof data.turnstileToken === 'string' ? data.turnstileToken : undefined
    }
  };
};

/**
 * Generates human-readable lead reference: LEAD-XXXXXX
 * Using unambiguous character set (avoiding 0, O, 1, I).
 */
export const generateReferenceId = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  const randomBytes = new Uint8Array(6);
  crypto.getRandomValues(randomBytes);
  for (let i = 0; i < 6; i++) {
    code += chars[randomBytes[i] % chars.length];
  }
  return `LEAD-${code}`;
};

/**
 * Handles POST /api/leads request against an abstract LeadRepository.
 */
export const handleCreateLead = async (
  body: unknown,
  repository: LeadRepository,
  clientIp = '127.0.0.1'
): Promise<{ status: number; body: Record<string, unknown> }> => {
  // Rate limiting check
  if (isRateLimited(clientIp)) {
    return {
      status: 429,
      body: {
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting again.'
      }
    };
  }

  // Server-side validation
  const validation = validateLeadInput(body);
  if (!validation.isValid || !validation.sanitized) {
    return {
      status: 400,
      body: {
        success: false,
        error: 'Validation failed. Please correct the highlighted fields.',
        details: validation.errors
      }
    };
  }

  try {
    const input = validation.sanitized;
    const referenceId = generateReferenceId();
    const leadId = `lead_${crypto.randomUUID()}`;
    const now = new Date().toISOString();

    const record: LeadRecord = {
      id: leadId,
      reference_id: referenceId,
      full_name: input.fullName,
      email: input.email,
      phone: input.phone,
      current_technology: input.currentTechnology,
      years_of_experience: input.yearsOfExperience,
      target_technology: input.targetTechnology,
      message: input.message || null,
      status: 'NEW',
      created_at: now,
      updated_at: now
    };

    await repository.insertLead(record);

    return {
      status: 201,
      body: {
        success: true,
        leadId: referenceId,
        message: 'Inquiry received successfully.'
      }
    };
  } catch (err) {
    console.error('Failed to persist lead record:', err);
    return {
      status: 500,
      body: {
        success: false,
        error: 'Unable to process your inquiry at this moment. Please try again or contact support@talenttrivo.com.'
      }
    };
  }
};
