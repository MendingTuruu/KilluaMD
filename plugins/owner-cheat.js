let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].koin = 99999999999999999
        global.db.data.users[m.sender].limit = 99999999999999999
        global.db.data.users[m.sender].exp = 9999999
        m.reply(`*Selamat Kamu Mendapatkan*:\n*Koin:* 999999999999\n*Limit:* 999999999999\n*Exp:* 9999999`)
}
handler.tags = ['owner']
handler.help = ['cheat']
handler.command = /^(cheat)$/i
handler.owner = true

export default handler