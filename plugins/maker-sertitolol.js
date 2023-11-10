import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Teksnya?'
  let res = `https://api.xyroinee.xyz/api/maker/tolol?text=${text}&apikey=${global.xyro}`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak Sertifikatnya`, m, false)
}
handler.help = ['sertitolol']
handler.tags = ['maker']
handler.command = /^(sertitolol)$/i
handler.register = false

handler.limit = true

export default handler
