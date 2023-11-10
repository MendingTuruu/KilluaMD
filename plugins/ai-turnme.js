import axios from "axios"
import { readFileSync } from "fs"
import uploadFile from '../lib/uploadFile.js'


let handler = async (m, { conn, usedPrefix, command, text }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Media Nya Kak'
if (!text) throw 'Masukan Style Yang Kamu Inginkan\nList Style Yang Ada\n- anime\n- pixar\n- jojo\n- retro\n- spirited\n- cyberpunk\n- synthwave\n- horror\n- zombie\n- rdr\n- pixel\n- thunderstruck\n- onepiece\n- onfire\n- gtav\n- aether\n- impasto\n- barbie\n- airbender\n- block\n- heroes'
m.reply(wait)
let media = await q.download()
let url = await uploadFile(media)
const { data } = await axios.post(`https://api.itsrose.life/image/turnMe?apikey=${global.rose}`, {
  init_image: url,
  style: text,
  image_num: 1,
}).catch((e) => e?.["response"]);
const { status, message } = data; 

if (!status) {
	return m.reply(message);
}
const { result } = data;
console.log(result);
await conn.sendFile(m.chat, result.images[0], 'conco.jpg', `_Nih Kak Hasilnya >,<_`, m)
}
handler.help = ['turnme']
handler.tags = ['ai']
handler.command = /^(turnme)$/i
handler.limit = true

export default handler