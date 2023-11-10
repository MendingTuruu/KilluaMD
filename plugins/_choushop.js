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

Pricelist :

•Grandmaster : RM1.9 / star
•Epic : RM2 / star
•Legend : RM3.5 / star
•Mythic : RM6 / star 
•Mythic honor : RM8 / star
•Mythical glory : RM8.6/ star
•Mythic grading : RM57

PRICELIST CLASSIC

• 1 match : RM1.5
• 10 match : RM15
• 20 match : RM27
• 50 match : RM58
• 100 match classic : RM100

PRICELIST MCL

•MCl WEEKLY : RM26
•MCL FINAL : RM45

Bonus Cas RM10 

_Bonus_ : Maniac / Savage / Mvp / Winstreak / Up Winrate100% / Up Mmr / Requis Hero Max 3(Hero) / Proses2-3 Hari /
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/a1ba2e89b15486337af78.jpg' }, caption: caption }, {quoted: m })
}
handler.command = /^(joki)$/i

handler.register = false
export default handler