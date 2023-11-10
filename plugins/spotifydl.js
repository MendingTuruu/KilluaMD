import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*Example*: .spotifydl https://open.spotify.com/track/xxxxx');
    return;
  }
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

  let apikey = `haikalgans`;
  let url = `https://api.lolhuman.xyz/api/spotify?apikey=haikalgans&url=${encodeURIComponent(text)}`;

  try {
    let res = await fetch(url);
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (json.status !== 200) throw json.message;

    let result = json.result;

    let audioBuffer = await fetch(result.link).then(response => response.buffer());
    fs.writeFileSync('audio.mp3', audioBuffer);

    conn.sendFile(m.chat, 'audio.mp3', 'audio.mp3', '', m);

    fs.unlinkSync('audio.mp3');

  } catch (error) {
    m.reply(`Error: ${error}`);
  }
};

handler.command = /^(spotifydl)$/i;
handler.tags = ['downloader'];
handler.help = ['spotifydl'];
handler.group = false;
handler.register = true;

export default handler;