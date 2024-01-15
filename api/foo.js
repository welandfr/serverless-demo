import { sql } from '@vercel/postgres';

export default async function handler(req, res) {

  try {
    const { rows } = await sql`SELECT * FROM foo`;
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

/**
 *  tagged template literal
 *

function tagFun(foo, ...vals) {
    console.log('f2', foo, vals)
    // note ... Spread operator syntax skapar här en ny array av alla resterande argument
}

const fname = 'Fredrik'
const lname = 'Welander'

tagFun(`hello ${fname} ${lname}!`)

tagFun`hello ${fname} ${lname}!`
 */