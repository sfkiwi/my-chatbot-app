import axios from 'axios';

export default async function handler(req, res) {
  const { messages } = req.body;

  const gptResponse = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: messages.map(msg => `${msg.role}: ${msg.content}`).join('\n') + '\nbot:',
      max_tokens: 150,
      n: 1,
      stop: ['user:', 'bot:'],
      temperature: 0.9,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  const reply = gptResponse.data.choices[0].text.trim();
  res.status(200).json({ reply });
}
