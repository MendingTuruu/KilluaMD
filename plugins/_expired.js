let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `Masa Sewa Untuk Grup Ini Telah Habis, Waktunya Aku Keluar Dari Group Ini Dan Terima Kasih Telah Menyewaku >,<`, null).then(() => {
                conn.sendContact(m.chat, owner, m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

export default handler