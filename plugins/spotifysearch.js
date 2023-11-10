import fetch from "node-fetch";

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Enter Title!\n\nExample: ${usedPrefix + command} melukis senja`
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
  var dann = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=haikalgans&query=${text}`)
  var res = await dann.json()
  var hasil = `• Title: *${res.result[0].title}*
• Artis: *${res.result[0].artists}*
• Duration: *${res.result[0].duration}*
• Popularity: *${res.result.popularity}*

• ID: *${res.result[0].id}*
• Link: *${res.result[0].link}*
`
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6288980870067@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}};
  await conn.reply(m.chat, hasil, fkonn);
}

handler.command = handler.help = ['spotifysearch','spotifys'];
handler.tags = ['internet'];

export default handler;