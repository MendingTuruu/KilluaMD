import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
if (!text) throw 'Masukan Apikeynya'
let api = await fetch(`https://api.xyroinee.xyz/checkapikeyfree?apikey=${text}`)
let hasil = await api.json()
m.reply(`Apikey: ${hasil.result.apikey}\nLimit: ${hasil.result.limit}`)
} catch (e) {
m.reply('Maaf Kak Apikey Tersebut Tidak Terdaftar')
}
}
handler.help = ['cekkey']
handler.tags = ['user']
handler.command = /^(cekkey)$/i

export default handler
