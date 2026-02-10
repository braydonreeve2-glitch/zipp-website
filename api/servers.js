export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.BOT_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.BOT_API_KEY}`
      }
    });

    if (!response.ok) throw new Error('Bot API error');

    const data = await response.json();

    res.status(200).json({ servers: data.servers });
  } catch (err) {
    res.status(200).json({ servers: 0 });
  }
}
