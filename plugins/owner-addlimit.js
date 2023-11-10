let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Jumlah Limit Yang Akan Diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag Orangnya'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya Angka'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw 'Minimal 1'
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 999) return m.reply('Ngotak Dikit Lah Kalau Ngasih, Kebanyakan Itu!\nLu Mau Systemku Error??') 

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
}

handler.help = ['addlimit']
handler.tags = ['owner']
handler.command = /^(addlimit)$/
handler.rowner = false
handler.premium = false
handler.owner = true

export default handler

