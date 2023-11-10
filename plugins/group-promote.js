let handler = async (m, { conn }) => {
	let who = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : ''
	if (!who || who.includes(conn.user.jid)) throw `*Tag Yang Mau Di Jadiin Admin`
	try {
		await conn.groupParticipantsUpdate(m.chat, [who], 'promote')
    m.reply(` ${who} Telah Menjadi Admin`)
	} catch (e) {
		console.log(e)
	}
}

handler.help = ['promote']
handler.tags = ['group']
handler.command = /^(promote)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler