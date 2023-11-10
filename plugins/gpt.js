
import { ChatGpt } from '../lib/ChatGpt.js'

let handler = async (m, { text, usedPrefix, conn, command }) => {
    
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* .gpt2 presiden Indonesia`
const openai = 'https://telegra.ph/file/8fd766bb9f183c98ba4eb.jpg'
await m.reply(wait)
  
  ChatGpt(text).then(a => {
  let result = a.reply
  
conn.sendMessage(m.chat, {text: result,
contextInfo: {
    "externalAdReply": {"title": 'Killua Zoldyck',
        "body": command + ' ' + text,
        "showAdAttribution": true,
        "mediaType": 1,
        "sourceUrl": 'https://chat.whatsapp.com/IbptGVcM4lmKYk7S63sfy1',
        "thumbnailUrl": openai,
        "renderLargerThumbnail": true
    }}}, 
    {quoted: m})
    
}).catch(err => {
  console.error(err)
  m.reply("gw pusing sorry gak bisa jawab")
})
}
handler.command = /^(ai)$/i
handler.help = ['ai']
handler.tags = ['ai']
//handler.diamond = true
handler.premium = false
export default handler