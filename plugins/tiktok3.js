import fg from 'api-dylux'
var handler = async (m, { conn, text, args, usedPrefix, command }) => {
 
 if (!text) throw ` Gunakan link Tiktok!\n\n📌 Example:\n*${usedPrefix + command}* https://tiktok.com/nazwabot`
m.reply(wait)
let pangeran = await fg.tiktok(args[0]);
 	  
let tagnya = `@${m.sender.split`@`[0]}`
let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
let pangerann = `•ᴛɪᴋᴛᴏᴋ ᴡᴍ•\n➔ ɴɪᴄᴋɴᴀᴍᴇ ${pangeran.nickname}\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${pangeran.title}\n\n${wm}`
 conn.sendFile(tg, pangeran.play, 'fb.mp4', `${pangerann}`, m)
 conn.sendFile(m.chat, pangeran.music, 'fb.mp4', `${pangerann}`, m)
 await m.reply(`😁TERKIRIM DI PRIVATE CHAT ${tagnya}`)
}
handler.help = ['tiktok3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok3)$/i
handler.limit = true
export default handler