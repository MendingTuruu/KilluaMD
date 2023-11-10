let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/89291bc27c3aadb7e271c.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..

▧「 *P E M B A Y A R A N* 」

*🎗️E-Walet*
• Ovo = 0859-3436-2661
• Dana = 0859-3436-2661
• Gopay = 0859-3436-2661
• LinkAja = 0859-3436-2661
• Shopee = 0859-3436-2661

👤A/N : C**U

Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargai 👽
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler