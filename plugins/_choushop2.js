let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
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
  const caption = `
*JOKICHOU4KSTORE*

JokiBoost List:

•Epic V  - Legends V  RM54
•Epic V -Mythic Grading 0 Point RM150
•Epic IV - Mythic RM116
•Epic III - Mythic RM103
•Epic II - Mythic RM95
•Epic I - Mythic RM83
•Legends V - Mythic RM70
•Grading - Glory 50 Stars RM360
•Mythic Grading Full Poin RM76 
•Glory 50⭐ - Immortal 100⭐ RM430
Immortal 100⭐ RM1000

Bonus Cas RM10

_Bonus_ : Maniac / Savage / Mvp / Winstreak / Up Winrate100% / Up Mmr / Requis Hero Max 3(Hero) / Proses2-3 Hari /
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7d8173e79cc0ca67510b9.jpg' }, caption: caption }, {quoted: m })
}
handler.command = /^(jokiboost)$/i

handler.register = false
export default handler