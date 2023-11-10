const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    let warn = global.db.data.users[m.sender].warn
    if (chat.antiLink && isGroupLink && !isAdmin) {
       global.db.data.users[m.sender].warn += 1
        if (isBotAdmin && warn === 5) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await m.reply(`*⚠️Link Terdeteksi⚠️*\n\nPesanmu akan di hapus!!`)
       if (isBotAdmin && bot.restrict) {
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }
    }
    return !0
}
