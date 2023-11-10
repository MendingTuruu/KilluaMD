import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix }) => {
if (!text) throw `Example ${usedPrefix}nulis3 Teks Yang Ingin Kamu Tulis`
let kertas = `https://api.lolhuman.xyz/api/nulis?apikey=haikalgans&text=${text}`
await conn.sendFile(m.chat, kertas, 'error.jpg', 'Lain Kali Nulis Sendiri...', m)
}
handler.help = ['n'].map(v => v + 'ulis3 <teks>')
handler.tags = ['nulis']
handler.command = /^(nulis)$/i
export default handler
// BY MFARELS
// https://GitHub.com/MFarelS/