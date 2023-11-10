import axios from "axios"
import { readFileSync } from "fs"


let handler = async (m, { conn, usedPrefix, command, text }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Foto Nya Kak'
if (!text) throw 'Masukan Hair Id Yang Di Inginkan Dan Fotonya Harus Jelas\n\nList Hair ID Nya:\n- fishtail_girl\n-  mermaid_girl\n- bluntbangs_girl\n- curtains_girl\n- school_girl\n- straight_girl\n- shorthair_girl\n- shor_man\n- k_man\n- natural_man\n- side_man\n- slicked_man\n- comma_man\n\nContoh: .hairstyle k_man' 
m.reply(wait)
let media = await q.download()
const imageBufer = media
const form = new FormData();
const blob = new Blob([imageBufer], { type: "image/jpg" });
form.append("file", blob, "image.jpg");
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/hair_style",
		method: "POST",
		params: {
			hair_id: text,
         	json: true, 
		    apikey: global.rose,
		},
		data: form,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data;

if (!status) {
	return console.error(message); 
}
const { result } = data;
console.log(result);
const buffer = Buffer.from(result.base64Image, 'base64')
await conn.sendFile(m.chat, buffer, 'conco.jpg', 'Nih Kak, Hasil Sesuai Hair ID Nya >,<', m)
}
handler.help = ['hairstyle']
handler.tags = ['ai']
handler.command = /^(hairstyle)$/i
handler.limit = true

export default handler
