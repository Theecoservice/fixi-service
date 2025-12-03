const BOT_TOKEN = '7833833391:AAGMv2ClReemDxndK91cOZTtjeeXSMJh9zM'
const CHAT_ID = '-3308428511'

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
