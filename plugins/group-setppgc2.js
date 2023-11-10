import fs from 'fs'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const jimp_1 = require('jimp')
let handler = async (m, { conn, command, usedPrefix }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let media = await q.download()
			let GcB = m.chat
			let { img } = await generateProfilePicture(media)
			await conn.query({
				tag: 'iq',
				attrs: {
					to: GcB,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			m.reply(`Sukses mengganti PP Group`)
		} catch (e) {
			console.log(e)
			m.reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['setppgcfull']
handler.tags = ['group']
handler.command = /^(setppgc2|setppgcfull)$/i

handler.group = handler.admin = handler.botAdmin = true

export default handler

async function generateProfilePicture(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}
