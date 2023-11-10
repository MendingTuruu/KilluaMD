let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let user = global.db.data.users[who]
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit
    m.reply(`
❏ *Username:* ${user.registered ? user.name : conn.getName(who)}
▧ *Status:*  ${who.split`@`[0] == global.nomorwa ? '🎗️Developer🎗️' : user.premiumTime >= 1 ? '👑ℙ𝕣𝕖𝕞𝕚𝕦𝕞👑' : user.level >= 1000 ? 'Elite User' : 'Free User'}
▧ *Limit:* ${limit}
`.trim())
}
handler.help = ['limit [@user]']
handler.tags = ['main']
handler.command = /^(limit)$/i
export default handler 