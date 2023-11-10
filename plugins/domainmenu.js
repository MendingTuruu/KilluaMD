var handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!isOwner) return reply(`Ngapain ? Domain Privasi, Hanya Bisa Oleh Owner Pangeran`)
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const owned = `6285934362661@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST DOMAIN* )▭▬▭

┏━━━━━━━━━━━━━━━━━━━
┣ ${usedPrefix}domain1 panellstore.com
┣ ${usedPrefix}domain2 panellstore.net
┣ ${usedPrefix}domain3 panellstore.icu
┣ ${usedPrefix}domain4 panellstore.xyz
┣ ${usedPrefix}domain5 panellstore.art
┣ ${usedPrefix}domain6 panellkuu.com
┣ ${usedPrefix}domain7 jasa-panel.my.id 
┣ ${usedPrefix}domain8 didinsec.biz.id 
┣ ${usedPrefix}domain9 putraoffc.cfd 
┣ ${usedPrefix}domain10 sellerpannel.my.id 
┣ ${usedPrefix}domain11 pannelku.icu
┣ ${usedPrefix}domain12 pannelku.cfd
┣ ${usedPrefix}domain13 putraoffc.site
┣ ${usedPrefix}domain14 putraoffc.com 
┣ ${usedPrefix}domain15 kangpannel.xyz 
┣ ${usedPrefix}domain16 mypannelku.com 
┣ ${usedPrefix}domain17 pannelmurah.xyz
┣ ${usedPrefix}domain18 storepannel.xyz
┣ ${usedPrefix}domain19 tokopannel.xyz
┣ ${usedPrefix}domain20 mypannel.cfd
┣ ${usedPrefix}domain21 adminpannel.xyz
┣ ${usedPrefix}domain22 mypannel.icu
┣ ${usedPrefix}domain23 tokocpannelmurah.xyz
┣ ${usedPrefix}domain24 websitepannelmurah.com
┣ ${usedPrefix}domain25 panellku.my.id
┣ ${usedPrefix}domain26 panellku.me 
┣ ${usedPrefix}domain27 panellku.biz.id 
┣ ${usedPrefix}domain28 panellku.tech 
┣ ${usedPrefix}domain29 panelkuu.xyz
┣ ${usedPrefix}domain30 panellku.com
┣ ${usedPrefix}domain31 biistoreee.tech
┣ ${usedPrefix}domain32 biistoreee.xyz 
┣ ${usedPrefix}domain33 rulzxyxd.com 
┣ ${usedPrefix}domain34 rafatharoffc.dev
┣ ${usedPrefix}domain35 rafatharoffcial.dev
┣ ${usedPrefix}domain36 rizalshop.my.id
┣ ${usedPrefix}domain37 panelku.link
┣ ${usedPrefix}domain38 sanzyy.xyz
┣ ${usedPrefix}domain39 home-panel.pw
┣ ${usedPrefix}domain40 aswinxd.me
┣ ${usedPrefix}domain41 panel-zall.me
┣ ${usedPrefix}domain42 digital-market.me
┣ ${usedPrefix}domain43 rafatharofficial.my.id
┣ ${usedPrefix}domain44 tokodigital.software
┗━━━━━━━━━━━━━━━━━━━

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
await conn.sendMessage(m.chat, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
handler.help = ['listdomain']
handler.tags = ['domain']
handler.command = /^(listdomain)$/i

export default handler
