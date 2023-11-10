import itsrose from "../lib/itsrose.life.js";

const handler = async (m, { conn, usedPrefix, command, args }) => {
	const [style = "anime"] = args;
	const q = m.quoted ? m.quoted : m;
	const mime = q.mtype || "";
	if (!/image/.test(mime)) {
		return m.reply(
			`You must reply to an image with the command *${usedPrefix + command}*`
		);
	}

	m.reply("Please wait...");

	const image = await q.download();
	const form = new FormData();
	const blob = new Blob([image], {
		type: "image/jpeg",
	});
	form.append("file", blob, "image.jpg");
	const { status, result, message } = await itsrose.request({
		url: "/image/differentMe",
		method: "POST",
		params: {
			style,
			json: true,
		},
		data: form,
	});
	if (!status) {
		return m.reply(message);
	}
	const imageBuffer = Buffer.from(result["base64Image"], "base64");
	await conn.sendMessage(
		m.chat,
		{
			image: imageBuffer,
		},
		{ quoted: m }
	);
};

handler.help = ["dfm2"];
handler.tags = ["tools"];
handler.command = ["dfm2"];
export default handler;
