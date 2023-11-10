import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '❗Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
❓Siapakah aku? ${json.soal}

🕑Timeout *${(timeout / 1000).toFixed(2)} detik*

💥Bonus: ${poin} XP
Ketik ${usedPrefix}who untuk bantuan
`.trim()
    conn.siapakahaku[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `❗Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.group = true

export default handler
