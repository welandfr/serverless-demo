import { sql } from '@vercel/postgres';
 
export default async function handler(
  request,
  response,
) {
  try {
    const result = await sql`CREATE TABLE PetsA ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
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