export default async function handler(req, res) {
    return res.send({
        method: req.method,
        
        /* Behövs ingen .env-fil lokalt när man kör projektet med vercel dev (den tar ENV från projektet på vercel)*/
        env: process.env.FOO
    });
}
