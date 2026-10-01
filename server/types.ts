export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'CLOSED';

export interface LeadRecord {
  id: string;
  reference_id: string;
  full_name: string;
  email: string;
  phone: string;
  current_technology: string;
  years_of_experience: string;
  target_technology: string;
  message: string | null;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
}

export interface CreateLeadInput {
  fullName: string;
  email: string;
  phone: string;
  currentTechnology: string;
  yearsOfExperience: string;
  targetTechnology: string;
  message?: string;
  hpWebsite?: string; // Honeypot field
  turnstileToken?: string; // Optional Turnstile verification token
}

/**
 * Universal Database Repository Interface for Leads.
 * Decouples business logic from specific database engines (Local SQLite vs Cloudflare D1).
 */
export interface LeadRepository {
  insertLead(lead: LeadRecord): Promise<void>;
  getLeadByReference(refId: string): Promise<LeadRecord | null>;
  getAllLeads?(): Promise<LeadRecord[]>;
}

/**
 * Minimal Cloudflare D1 Database interface for type-safety without requiring external package.
 */
export interface D1PreparedStatement {
  bind(...args: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run(): Promise<{ success: boolean; error?: string }>;
  all<T = unknown>(): Promise<{ results: T[]; success: boolean; error?: string }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}
