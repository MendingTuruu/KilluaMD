import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  m.reply(wait)
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/search/lirik?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  conn.sendFile(m.chat, anu.data.thumb, 'lirik.jpg', anu.data.lirik, m)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['liriklagu']
handler.tags = ['internet']
handler.command = /^(liriklagu)$/i
handler.limit = true

export default handler
