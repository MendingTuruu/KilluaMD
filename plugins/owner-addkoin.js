let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Jumlah Koin Yang Akan Diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag Orangnya'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya Angka'
    let poin = parseInt(txt)
    let koin = poin
    if (koin < 1) throw 'Minimal 1'
    let user = global.db.data.users
    user[who].koin += poin
    if (koin > 9999999) return m.reply('Ngotak Dikit Lah Kalau Ngasih, Kebanyakan Itu!\nLu Mau Systemku Error??') 

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Koin!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
}

handler.help = ['addkoin']
handler.tags = ['owner']
handler.command = /^(addkoin)$/
handler.rowner = false
handler.premium = false
handler.owner = true

export default handler

