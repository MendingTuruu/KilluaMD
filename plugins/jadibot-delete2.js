import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = async (m, { conn, usedPrefix }) => {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './bebots/';
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
}}
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}tidak ditemukan file yang menyertakan id 𝘾𝙃𝘼𝙏` }, { quoted: m });
} else {
await conn.sendMessage(m.chat,
{ text: `${lenguajeGB['smsAvisoEG']()}𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙊𝙉 ${filesDeleted} 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙎𝙀𝙎𝙄𝙊𝙉` },
{ quoted: m }
)}
} catch (err) {
console.error(`${lenguajeGB['smsAvisoFG']()}𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 𝙊 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙎𝙀𝙎𝙄𝙊𝙉 𝙉𝙊 𝙀𝙓𝙄𝙎𝙏𝙀𝙉`, err);
await conn.sendMessage(m.chat,
{ text: `${lenguajeGB['smsAvisoFG']()}𝙊𝘾𝙐𝙍𝙍𝙄𝙊 𝙐𝙉 𝙀𝙍𝙍𝙊𝙍 𝘼𝙇 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙇𝙊𝙎 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙎𝙀𝙎𝙎𝙄𝙊𝙉` },
{ quoted: m }
)}
await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoRG']()}🐈 halo sekarang sudah berfungsi\njika bot tidak merespons perintah Anda, silakan lakukan sedikit spam\n\n*contoh:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s` }, { quoted: m })};
handler.help = ['deletebot'];
handler.tags = ['bebot'];
handler.command = /^(msgespera|ds)$/i;
export default handler;