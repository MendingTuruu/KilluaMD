import fg from 'api-dylux';
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
if (!args[0]) throw `✳️ ${mssg.noLink('Facebook')}\n\n📌 ${mssg.example} :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
const { key } = await conn.sendMessage(m.chat, {text: "```Waitching For Video😴```"}); //Pengalih isu
  try {
    let result = await fg.fbdl(args[0]);
    let tex = `
┌─⊷ *F A C E B O O K  D O W N L O A D*
▢ *${mssg.title}:* ${result.title}
└───────────`;
    await conn.sendMessage(m.chat, {text: "```Sukses Download Video😋```", edit: key })
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
  } catch (error) {
    m.reply(mssg.error)
  }
};
handler.help = ['facebook'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.limit = true;

export default handler;