import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "2023 - 2025 © Killua Lèarning",
          thumbnailUrl: 'https://telegra.ph/file/a0c643a6d1e1c02ef0393.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
 }
 handler.help = ['gcbot'];
handler.tags = ['main'];
handler.command = /^gcbot$/i;
export default handler;