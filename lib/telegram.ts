const BOT_TOKEN = '7833833391:AAGhkwqVsoM1BaUYpg0teen4saQaCIHNIlc'
const CHAT_ID = '-1002238742866'

export async function sendTelegramMessage(message: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    return response.ok
  } catch (error) {
    console.error('Telegram API error:', error)
    return false
  }
}
