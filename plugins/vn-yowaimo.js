import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "yowaimo.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(yowaimo)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/yowaimo.mp3",
"./vn/yowaimo2.mp3",
]