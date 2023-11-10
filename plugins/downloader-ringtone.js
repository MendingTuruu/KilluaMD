import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Mau Cari Apa?`
	m.reply(wait)
	try {
	let res = await fetch(`https://api.xyroinee.xyz/api/search/ringtone?q=${text}&apikey=${global.xyro}`)
  let result = await res.json()
  conn.sendMessage(m.chat, { 
    document: { url: result.data[0].audio }, 
    mimetype: 'audio/mpeg', 
    fileName: `titid.mp3`,
    caption: `Ringtone`
  }, {quoted: m})
  } catch (e) {
  m.reply(`Terjadi Kesalahan, Ringtone Yang Kamu Cari Tidak Di Temukan`)
  }
}
handler.help = ['ringtone']
handler.tags = ['downloader']
handler.command = /^(ringtone)$/i
handler.limit = true

export default handler
