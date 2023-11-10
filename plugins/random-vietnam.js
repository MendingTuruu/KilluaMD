import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.xyroinee.xyz/api/asupan/image/vietnam?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(vietnam)$/i
handler.tags = ['asupan']
handler.help = ['vietnam']
handler.premium = false
handler.limit = true

export default handler