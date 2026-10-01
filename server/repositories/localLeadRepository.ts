import initSqlJs, { Database, SqlJsStatic } from 'sql.js';
import fs from 'fs';
import path from 'path';
import { LeadRecord, LeadRepository } from '../types';

let SQL: SqlJsStatic | null = null;
let dbInstance: Database | null = null;

const DB_DIR = path.resolve(process.cwd(), 'database');
const DB_FILE = path.join(DB_DIR, 'talenttrivo.db');
const MIGRATIONS_DIR = path.join(DB_DIR, 'migrations');

/**
 * Persists in-memory SQLite database to disk.
 */
const persist = () => {
  if (!dbInstance) return;
  const data = dbInstance.export();
  const buffer = Buffer.from(data);
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_FILE, buffer);
};

/**
 * Initializes SQLite database and executes migrations if not applied.
 */
export const getLocalDatabase = async (): Promise<Database> => {
  if (dbInstance) {
    return dbInstance;
  }

  if (!SQL) {
    SQL = await initSqlJs();
  }

  if (fs.existsSync(DB_FILE)) {
    const fileBuffer = fs.readFileSync(DB_FILE);
    dbInstance = new SQL.Database(fileBuffer);
  } else {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    dbInstance = new SQL.Database();
  }

  // Ensure migration tracking table
  dbInstance.run(`
    CREATE TABLE IF NOT EXISTS _migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL UNIQUE,
      applied_at TEXT NOT NULL
    );
  `);

  // Run pending migrations
  if (fs.existsSync(MIGRATIONS_DIR)) {
    const files = fs.readdirSync(MIGRATIONS_DIR).filter((f) => f.endsWith('.sql')).sort();
    for (const file of files) {
      const checkStmt = dbInstance.prepare('SELECT id FROM _migrations WHERE filename = ?');
      checkStmt.bind([file]);
      const hasApplied = checkStmt.step();
      checkStmt.free();

      if (!hasApplied) {
        const migrationSql = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf-8');
        dbInstance.run(migrationSql);
        dbInstance.run(
          'INSERT INTO _migrations (filename, applied_at) VALUES (?, ?)',
          [file, new Date().toISOString()]
        );
        persist();
      }
    }
  }

  persist();
  return dbInstance;
};

/**
 * Local SQLite implementation of LeadRepository for offline / Node development.
 */
export class LocalLeadRepository implements LeadRepository {
  async insertLead(lead: LeadRecord): Promise<void> {
    const db = await getLocalDatabase();
    const sql = `
      INSERT INTO leads (
        id, reference_id, full_name, email, phone,
        current_technology, years_of_experience, target_technology,
        message, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(sql, [
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
    ]);

    persist();
  }

  async getLeadByReference(refId: string): Promise<LeadRecord | null> {
    const db = await getLocalDatabase();
    const stmt = db.prepare('SELECT * FROM leads WHERE reference_id = ?');
    stmt.bind([refId]);

    if (stmt.step()) {
      const row = stmt.getAsObject() as unknown as LeadRecord;
      stmt.free();
      return row;
    }

    stmt.free();
    return null;
  }

  async getAllLeads(): Promise<LeadRecord[]> {
    const db = await getLocalDatabase();
    const res = db.exec('SELECT * FROM leads ORDER BY created_at DESC');
    if (res.length === 0) return [];

    const columns = res[0].columns;
    return res[0].values.map((row) => {
      const obj: Record<string, unknown> = {};
      columns.forEach((col, index) => {
        obj[col] = row[index];
      });
      return obj as unknown as LeadRecord;
    });
  }
}

export const localLeadRepository = new LocalLeadRepository();
