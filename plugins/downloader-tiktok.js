import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `❓Linknya Mana?`
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
try {
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/tiktok?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let cap = `Nih Kak >,<`
  let anu = `*Nickname:* ${json.data.author.author}\n*Name:* ${json.data.author.author_name}`
  await conn.sendMessage(m.chat, { video: { url: json.data.other_video_link[1] }, caption: cap }, { quoted: m })
  } catch (e) {
  m.reply(`❗Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`)
  }
  }
handler.help = ['tiktok2']
handler.tags = ['downloader']
handler.command = /^(tiktok2|tt2|ttdl2|tiktokdl2)$/i
handler.limit = true

export default handler