import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/search/wikimedia?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Title:* ${v.title}\n*Source:* ${v.source}\n*Image:* ${v.image}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['wikimedia']
handler.tags = ['internet']
handler.command = /^(wikimedia)$/i
handler.limit = true

export default handler
