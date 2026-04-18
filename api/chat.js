export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.Ee6hBPzbZTkLUMtq8jNdnW4Aqs13C0VK}`
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();

  res.status(200).json({
    reply: data.choices[0].message.content
  });
}
