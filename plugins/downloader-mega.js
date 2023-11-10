import { File } from "megajs";

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    try {
        if (!text) return m.reply(`example:\n${usedPrefix + command} https://mega.nz/file/0FUA2bzb#vSu3Ud9Ft_HDz6zPvfIg_y62vE1qF8EmoYT3kY16zxo`);
        
        const file = File.fromURL(text);
        await file.loadAttributes();
        
        if (file.size >= 300000000) return m.reply('Error: file size is too large (Minimum Size: 300MB)');
        
        m.reply(`*_Please wait a few minutes..._*\n${file.name} downloading...`);
        
        const data = await file.downloadBuffer();
        
        if (/mp4/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "video/mp4", fileName: `${file.name}.mp4` }, { quoted: m });
        } else if (/pdf/.test(file.name)) {
            await conn.sendMessage(m.chat, { document: data, mimetype: "application/pdf", fileName: `${file.name}.pdf` }, { quoted: m });
        } else {
            return m.reply(`Error: Unsupported file format`);
        }
    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(mega)$/i
export default handler
