/*import fetch from 'node-fetch';*/
import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    const img = await q.download();
    const url = await uploadImage(img);
    m.reply(wait);
    const scircle = global.API(`https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}`);
    const stiker = await sticker(null, scircle, global.packname, global.author);
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, {asSticker: true});
  } catch (e) {
    m.reply('*REPLY GAMBAR NYA DULU DONGO😤*');
  }
};
handler.command = /^scircle|circle$/i;
export default handler;