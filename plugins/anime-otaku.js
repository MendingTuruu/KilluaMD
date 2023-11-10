import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/otakudesu-search?q=${text}&apikey=${global.xyro}`)
  let otaku = await res.json()
let otakuinfo = `• *Title:* ${otaku.data[0].title}
• *Genre:* ${otaku.data[0].genres}
• *Status*: ${otaku.data[0].status}
• *Rating*: ${otaku.data[0].rating}
• *Link*: ${otaku.data[0].url}`
  conn.sendFile(m.chat, otaku.data[0].thumbnail, 'otaku.jpeg', otakuinfo, m)
  } catch (e) {
m.reply(`Terjadi Kesalahan, Judul Yang Kamu Cari Tidak Dapat Di Temukan`)
}
}
handler.help = ['otakusearch']
handler.tags = ['anime']
handler.command = /^(otakusearch)$/i
handler.limit = true

export default handler
