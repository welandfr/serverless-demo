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

function tagFun(names, ...vals) {
    console.log(names, vals)
    // note ... Spread operator syntax skapar här en ny array av alla resterande argument
}

foo = 'Foo'
bar = 'Bar'

tagFun(`normal ${foo} ${bar}!`)

tagFun`tagged ${foo} ${bar}!`
 */