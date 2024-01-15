import { sql } from '@vercel/postgres';
 
export default async function handler(req, res) {

    const { rows } = await sql`SELECT * FROM foo`;
    return res.json({ foo: 'bar'});
  /*try {
    const result = await sql`SELECT * FROM foo`;
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error });
  }*/
}