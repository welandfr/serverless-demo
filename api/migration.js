import { sql } from '@vercel/postgres';

export default async function handler(req, res) {

  try {
    await sql`
        CREATE TABLE IF NOT EXISTS foo (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL
        );
    `;
    await sql`ALTER TABLE foo ADD COLUMN IF NOT EXISTS description VARCHAR`;

    return res.status(200).json({ status: 'OK'});
  } catch (error) {
    return res.status(500).json({ error });
  }
}