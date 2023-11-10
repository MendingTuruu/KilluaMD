
let handler = async (m, { conn }) => {
  let stats = Object.entries(global.db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join('\n• ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '~_*©辛KILLUA ZOLDYCK*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...!'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_𝙻𝙾𝙰𝙳𝙸𝙽𝙶..._'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 10).map(({ name, total, last }, idx) => {
    if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '')
    return `${idx + 1}. ${name} 
${total}x Di Pakai
Terakhir Dipakai ${getTime(last)}
`}).join`\n\n`
  m.reply(txt)
}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^(dash|dashboard|db|hit)$/i

export default handler

export function parseMs(ms) {
  if (typeof ms !== 'number') throw 'Parameter must be filled with number'
  return {
    days: Math.trunc(ms / 86400000),
    hours: Math.trunc(ms / 3600000) % 24,
    minutes: Math.trunc(ms / 60000) % 60,
    seconds: Math.trunc(ms / 1000) % 60,
    milliseconds: Math.trunc(ms) % 1000,
    microseconds: Math.trunc(ms * 1000) % 1000,
    nanoseconds: Math.trunc(ms * 1e6) % 1000
  }
}

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return `${now.days} Hari Yang Lalu`
  else if (now.hours) return `${now.hours} Jam Yang Lalu`
  else if (now.minutes) return `${now.minutes} Menit Yang Lalu`
  else return `Barusan`
}
