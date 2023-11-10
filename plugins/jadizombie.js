
import uploadImage from '../lib/uploadImage.js'
import makemeazombie from 'makemeazombie'

let zombie = new makemeazombie()

async function handler(m, { conn }) {
    
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
await m.reply(wait)

if (!mime) {
 return m.reply('Kirim/Balas gambar dengan caption *.jadizombie*')

 }
let media = await q.download()
let gambar = await uploadImage(media)
zombie.transform({
    photo: `${gambar}`,
    destinyFolder: './tmp'
})
.then(data => {
    conn.sendFile(m.chat, data, 'zombie.jpg', `Foto Ke Zombie\n© Killua Zoldyck`, m)
})
 .catch(err => {
    console.log('Terjadi kesalahan:', err)
 })
}

handler.command = ['jadizombie']
handler.menuanime = ['jadizombie']
handler.tagsanime = ['ai']
//handler.diamond = 3
handler.premium = true
handler.limit = true

export default handler
