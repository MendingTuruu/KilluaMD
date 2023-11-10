import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Cari Apa?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/search/xnxx?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.result.map((v) => `*Title:* ${v.title}\n*Info:* ${v.info}\n*Link*: ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['xnxxsearch']
handler.tags = ['internet']
handler.command = /^(xnxxsearch)$/i
handler.limit = true

export default handler
