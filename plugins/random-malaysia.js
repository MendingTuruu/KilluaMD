import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.xyroinee.xyz/api/asupan/image/malaysia?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(malaysia)$/i
handler.tags = ['asupan']
handler.help = ['malaysia']
handler.premium = false
handler.limit = true

export default handler