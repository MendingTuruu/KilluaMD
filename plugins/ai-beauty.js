import axios from "axios"
import { readFileSync } from "fs"


let handler = async (m, { conn, usedPrefix, command, text }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Send Foto Nya Kak' 
if (!text) throw 'Masukan Angka Tingkatannya Maksimal 10\nContoh: .beauty 3' 
m.reply(wait)
let media = await q.download()
const imageBufer = media
const form = new FormData();
const blob = new Blob([imageBufer], { type: "image/jpg" });
form.append("file", blob, "image.jpg");
const { data } = await axios
	.request({ 
		baseURL: "https://api.itsrose.life",
		url: "/image/beauty_plus",
		method: "POST",
		params: {
			enhance: text,
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
await conn.sendFile(m.chat, buffer, 'conco.jpg', 'Nih Kak, Btw Udah Cantik Kok Pake Beauty >,<', m)
}
handler.help = ['beauty']
handler.tags = ['ai']
handler.command = /^(beauty)$/i
handler.limit = true

export default handler
