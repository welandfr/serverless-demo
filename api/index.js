export default async function handler(req, res) {
    return res.send(`Hello! ${req.method} works`);
}
