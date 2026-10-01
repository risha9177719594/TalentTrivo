import { D1Database, LeadRecord, LeadRepository } from '../types';

/**
 * Production Cloudflare D1 implementation of LeadRepository.
 * Executes native prepared statements against Cloudflare D1 SQLite database.
 */
export class CloudflareD1LeadRepository implements LeadRepository {
  constructor(private db: D1Database) {}

  async insertLead(lead: LeadRecord): Promise<void> {
    const sql = `
      INSERT INTO leads (
        id, reference_id, full_name, email, phone,
        current_technology, years_of_experience, target_technology,
        message, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const res = await this.db.prepare(sql).bind(
      lead.id,
      lead.reference_id,
      lead.full_name,
      lead.email,
      lead.phone,
      lead.current_technology,
      lead.years_of_experience,
      lead.target_technology,
      lead.message,
      lead.status,
      lead.created_at,
      lead.updated_at
    ).run();

    if (!res.success) {
      throw new Error(`D1 lead insertion failed: ${res.error || 'Unknown D1 error'}`);
    }
  }

  async getLeadByReference(refId: string): Promise<LeadRecord | null> {
    const sql = `SELECT * FROM leads WHERE reference_id = ? LIMIT 1`;
    return await this.db.prepare(sql).bind(refId).first<LeadRecord>();
  }

  async getAllLeads(): Promise<LeadRecord[]> {
    const sql = `SELECT * FROM leads ORDER BY created_at DESC`;
    const res = await this.db.prepare(sql).all<LeadRecord>();
    return res.results || [];
  }
}
