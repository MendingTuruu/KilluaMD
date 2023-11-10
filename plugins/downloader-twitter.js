import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 ${mssg.example} :\n*${usedPrefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`
          let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '~_*©辛KILLUA ZOLDYCK*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...!'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_𝙻𝙾𝙰𝙳𝙸𝙽𝙶..._'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}          
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ *${mssg.desc}:* ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
} catch (e) {
    m.reply(`✳️ ${mssg.error}`)
  } 
  
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = ['twitter', 'tw', 'x']
//handler.diamond = true
handler.premium = true
handler.limit = true

export default handler