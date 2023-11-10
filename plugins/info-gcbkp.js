import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Mʏ Gᴄ 18+*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "2023 - 2025 © Killua Lèarning",
          thumbnailUrl: 'https://telegra.ph/file/c5cf688bbf6d57a5a3f6c.png',
          sourceUrl: 'https://chat.whatsapp.com/DEBw8pD1rT080kqD2yOd4M',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
 }
 handler.help = ['gcbkp'];
handler.tags = ['main'];
handler.command = /^gcbkp$/i;
export default handler;