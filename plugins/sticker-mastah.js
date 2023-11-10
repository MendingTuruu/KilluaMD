//import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let vn = "./vn/sepuh.mp3"
	conn.sendFile(m.chat, vn, "gaa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});    
}

handler.customPrefix = /^(mastah|sepuh|sesepuh)$/i;
handler.command = new RegExp();

export default handler