export default async function handler(req, res) {
    return res.send({
        method: req.method,
        env: process.env.FOO
    });
}
