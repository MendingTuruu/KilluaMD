//import fetchJson from 'node-fetch';
import axios from 'axios'
//const fetchJson = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
let handler = async (m, { conn, args, text, usedPrefix, command,  isGroup }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
//let text = chath.slice(command.length + 1, chath.length)
switch (command) {
case 'caraorder': {
				let capp = `*Hallo _${name}_ Berikut Cara Order*\n\n*Followers :*\nex1 : _${usedPrefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${usedPrefix}followers 500|henzz4368_\n\n*View :*\nex 1 : _${usedPrefix}view jumlah|link_\nex 2 : _${usedPrefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${usedPrefix}like jumlah|link_\nex 2 : _${usedPrefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
				conn.sendMessage(m.chat, {text: capp}, {quoted:m})
				}
				break
          case 'followers': {
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let juma = text.split('|')[0] ? text.split('|')[0]: text
				let targtt = text.split('|')[1] ? text.split('|')[1]: ''
				if (targtt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${usedPrefix}${command.slice(1)} 500|henzz4368`)

				fetaa = await axios.get(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=follower`)
				list = []
				textplus = `${juma}|${targtt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${usedPrefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©Pangeran  (Owner Bot)\nKillua Zoldyck (Name Bot)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await conn.sendMessage(m.chat, listMessage)
               break
					}				
			case 'like':{
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahhh = text.split('|')[0] ? text.split('|')[0]: text
				let targettt = text.split('|')[1] ? text.split('|')[1]: ''
				if (targettt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${usedPrefix}${command.slice(1)} 500|henzz4368`)

				fetaa = await axios.get(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=like`)
				list = []
				textplus = `${jumlahhh}|${targettt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${usedPrefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©Pangeran  (Owner Bot)\nKillua Zoldyck (Name Bot)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await conn.sendMessage(m.chat, listMessage)
				}
				break
case 'view': {
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahh = text.split('|')[0] ? text.split('|')[0]: text
				let targett = text.split('|')[1] ? text.split('|')[1]: ''
				if (targett.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${usedPrefix}${command.slice(1)} 500|henzz4368`)

				fetta = await axios.get(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=pricelist&type=view`)
				list = []
				textplus = `${jumlahh}|${targett}`
            for (let L of fetta.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${usedPrefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©Pangeran  (Owner Bot)\nKillua Zoldyck (Name Bot)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await conn.sendMessage(m.chat, listMessage)
break
}
case 'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				if (args.length < 1) return m.reply(`*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|henzz4368\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
				let jumlah = text.split('|')[0] ? text.split('|')[0]: text
				let targ = text.split('|')[1] ? text.split('|')[1]: ''
				let idny = text.split('|')[2] ? text.split('|')[2]: ''

				feta = await axios.get(`https://ampibismm.my.id/api/json?bot=true&api_key=manikbot&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
				if (feta.status == false) {
  				m.reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
				} else {
  				let idpes = feta.data.order_id
  				let cap = `Hay *${name} ?,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! MENGGUNAKAN QRIS.\n\n*Id Pesanan Anda :* ${feta.data.order_id}\n*Target :* ${targ}\n*Jumlah Pesanan :* ${jumlah}\n*Total Harga Pesanan :* Rp ${feta.data.amount}\n*Status Orderan :* ${feta.data.status}\n\n_Info lebih lanjut klik button dibawah._`
  				buto = [{
    				buttonId: `cekstatus ${feta.data.order_id}`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
  				conn.sendMessage(from, {
    				caption: cap, image: {
      				url: feta.data.qris
    				}, buttons: buto, footer: `Pangeran\nKillua Zoldyck`
  				})
				}
				console.log(feta)
				}
		}
}
handler.help = ['caraorder', 'followers', 'like', 'view', 'confirmorderkunci'];
handler.command = ['caraorder', 'followers', 'like', 'view', 'confirmorderkunci'];
handler.tags = ['sosmed'];

export default handler;