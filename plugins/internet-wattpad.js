import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  let foto = anu.data[0].thumb
  anu = anu.data.map((v) => `*Title:* ${v.title}\n*Reads:* ${v.reads}\n*Vote:* ${v.vote}\n*Chapter:* ${v.chapter}\n*Link:* ${v.link}\nDescription:* ${v.desc}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, foto, '', anu, m)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['wattpad']
handler.tags = ['internet']
handler.command = /^(wattpad)$/i
handler.limit = true

export default handler
