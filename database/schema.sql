-- TalentTrivo Database Schema
-- System of Record for TalentTrivo Operations

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  reference_id TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_technology TEXT NOT NULL,
  years_of_experience TEXT NOT NULL,
  target_technology TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'NEW',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_reference_id ON leads (reference_id);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
