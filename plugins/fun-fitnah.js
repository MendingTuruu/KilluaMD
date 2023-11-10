let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `Contoh penggunaan:\n${usedPrefix + command} aku siapa? @6283897387848 Bukan siapa²`, m, { contextInfo: { mentionedJid: ['6283133329293@s.whatsapp.net'] } })
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `Contoh penggunaan:\n${usedPrefix + command} aku siapa? @6283897387848 Bukan siapa²`, m, { contextInfo: { mentionedJid: ['6289662933232@s.whatsapp.net'] } })
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
handler.help = ['fitnah <teks> @user <teks>']
handler.tags = ['fun']
handler.command = /^(fitnah|fakereply)$/

export default handler 

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}