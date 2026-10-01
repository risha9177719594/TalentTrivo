import initSqlJs from 'sql.js';
import fs from 'fs';

async function verify() {
  const SQL = await initSqlJs();
  const fileBuffer = fs.readFileSync('database/talenttrivo.db');
  const db = new SQL.Database(fileBuffer);

  const res = db.exec('SELECT reference_id, full_name, email, phone, current_technology, years_of_experience, target_technology, status, created_at FROM leads');
  console.log('TOTAL LEADS:', res[0] ? res[0].values.length : 0);
  console.log(JSON.stringify(res, null, 2));

  const spam = db.exec("SELECT count(*) as spam_count FROM leads WHERE full_name = 'Spam Bot'");
  console.log('SPAM LEADS (should be 0):', spam[0].values[0][0]);
}

verify().catch(console.error);
