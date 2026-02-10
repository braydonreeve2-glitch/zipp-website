export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.BOT_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.BOT_API_KEY}`
      }
    });

    if (!response.ok) throw new Error('Failed to fetch server count');

    const data = await response.json();

    res.status(200).json({ servers: data.servers });
  } catch (error) {
    res.status(200).json({ servers: 0 }); // fallback
  }
}
