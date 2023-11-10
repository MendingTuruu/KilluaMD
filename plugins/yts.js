import yts from 'yt-search'
import { youtubeSearch } from '@bochilteam/scraper-sosmed'
import { isUrl } from '../lib/func.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Sia Unstopable`
	if (isUrl(text)) {
		try {
			let anu = await youtubeSearch(text)
			anu = anu.video[0]
			let txt = `📌 *${anu.title}*\n\n`
			+ `🪶 *Author :* ${anu.authorName}\n`
			+ `⏲️ *Published :* ${anu.publishedTime}\n`
			+ `⌚ *Duration :* ${anu.durationH}\n`
			+ `👁️ *Views :* ${anu.viewH}\n`
			+ `🌀 *Url :* ${anu.url}`
			await conn.sendMsg(m.chat, { image: { url: anu.thumbnail.split("?")[0] }, caption: txt }, { quoted: m })
		} catch (e) {
			console.log(e)
			try {
				let anu = await (await fetch(`https://api.akuari.my.id/downloader/yt1?link=${args[0]}`)).json()
				let txt = `📌 *${anu.info.title}*\n\n`
				+ `🪶 *Author :* ${anu.info.channel}\n`
				+ `⏲️ *Published :* ${anu.info.uploadDate}\n`
				+ `👁️ *Views :* ${anu.info.views}\n`
				+ `🌀 *Url :* ${text}`
				await conn.sendMsg(m.chat, { image: { url: anu.info.thumbnail }, caption: txt }, { quoted: m })
			} catch (e) {
				console.log(e)
				throw 'invalid url / internal server error.'
			}
		}
	} else {
		try {
			let anu = await yts(text)
			let txt = `*Hasil : ${text}*`
			for (let i of anu.all) {
				txt += `\n\n🎯 *${i.title}*\n`
				+ `🪶 Author : ${i.author.name}\n`
				+ `${(i.duration && i.duration.timestamp) ? `⏰ *Duration :* ${i.duration.timestamp}\n` : ''}`
				+ `🚀 Published : ${i.ago}\n`
				+ `😎 View : ${i.views}\n`
				+ `🌀 Url : ${i.url}\n`
				+ `───────────────────`
			}
			await conn.sendMsg(m.chat, { image: { url: anu.all[0].thumbnail }, caption: txt }, { quoted : m })
		} catch (e) {
			console.log(e)
			try {
				let anu = await youtubeSearch(text)
				let txt = `*Hasil : ${text}*`
				for (let i of anu.video) {
					txt += `\n\n🎯 *${i.title}*\n`
					+ `🪶 Author : ${i.authorName}\n`
					+ `⏰ Duration : ${i.durationH}\n`
					+ `${i.publishedTime ? `${i.publishedTime.split(" ")[0] != 'Streamed' ? `🚀 Uploaded ${i.publishedTime}\n` : `🚀 ${i.publishedTime}\n`}` : ''}`
					+ `😎 View : ${i.viewH}\n`
					+ `🌀 Url : ${i.url}\n`
					+ `───────────────────`
				}
				await conn.sendMsg(m.chat, { image: { url: anu.video[0].thumbnail.split("?")[0] }, caption: txt }, { quoted : m })
			} catch (e) {
				console.log(e)
				throw 'not found / internal server error.'
			}
		}
	}
}

handler.help = ['ytsearch <teks> / <url>']
handler.tags = ['downloader']
handler.command = /^((search)?yt(s(earch)?)|youtube)$/i

export default handler