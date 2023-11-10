let handler = async (m, { conn, text, participants }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || q.mtype || ''
	let teks = `*Pesan Dari Admin Group:*\n${text ? text : m.quoted?.text ? m.quoted.text : m.quoted?.caption ? m.quoted.caption : m.quoted?.description ? m.quoted.description : 'Nothing'}\n\n`
	teks += `┌─ Pengumuman\n`
	for (let mem of participants) {
		teks += `│◦◈ @${mem.id.split('@')[0]}\n`
	}
	teks += `└────`
	if (/video|image|viewOnce/g.test(mime) && !/webp/g.test(mime)) {
		let media = await q.download?.()
		await conn.sendFile(m.chat, media, '', teks, null, false, { mentions: participants.map(a => a.id), quoted: m })
	} else await conn.reply(m.chat, teks, fkontak, { mentions: participants.map(a => a.id) })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.admin = true
handler.group = true

export default handler