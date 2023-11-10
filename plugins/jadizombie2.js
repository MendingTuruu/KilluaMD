import { tozombie } from 'betabotz-tools'
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${usedPrefix + command}`
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await tozombie(url)
let tegs = 'Convert Foto ke Zombie\n©Killua Zoldyck'
//let hasil = await (await conn.getFile(`https://vihangayt.me/tools/toanime?url=${url}`))

await conn.sendFile(m.chat, hasil.image_data, 'tozombie.jpg', tegs, m)
}

handler.help = ['zombie']
handler.tags = ['ai', 'premium']
handler.command = /^(zombie)$/i
//handler.diamond = 3
handler.limit = true
handler.premium = true

export default handler