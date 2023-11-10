const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, '*[ Deteksi Sistem ]*\n\n‼️Kamu Di blokir secara otomatis oleh Bot karena terdeteksi telah lancang Menelpon!\n\nJika ingin di buka blokirannya segera join ke Grup Bot dan informasi ke Owner!\n\n📌[ 𝗟𝗜𝗡𝗞 𝗚𝗥𝗢𝗨𝗣 ]\nhttps://chat.whatsapp.com/IbptGVcM4lmKYk7S63sfy1', null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}