import fs from 'fs'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = 'tebaklagu-' + m.chat
    if (id in conn.game) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./json/tebaklagu.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Artist: ${json.artis}

🕑Timeout *${(timeout / 1000).toFixed(2)} detik*

💥Bonus: ${poin} XP
Ketik ${usedPrefix}hlagu untuk bantuan
`.trim()
    conn.game[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.lagu, 'tebaklagu.mp3', '', conn.game[id][0])
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i

handler.onlyprem = true
handler.game = true

export default handler