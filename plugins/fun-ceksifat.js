import fetch from 'node-fetch';

let handler = async (m, { conn, command, text }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let pp = ''
    let name = m.mentionedJid[0] ? await conn.getName(m.mentionedJid[0]) : conn.user.name;
    if (!text) return conn.reply(m.chat, 'Masukkan namamu!', m)
    let nm = 100;
    let a = nm.getRandom();
    let b = nm.getRandom();
    let e = nm.getRandom();
    let f = nm.getRandom();
    let g = nm.getRandom();
    let h = nm.getRandom();
    let c = ['Baik Hati', 'Sombong', 'Pelit', 'Dermawan', 'Rendah Hati', 'Rendah Diri', 'Pemalu', 'Penakut', 'Pengusil', 'Cengeng'].getRandom();
    let d = ['Rajin', 'Malas', 'Membantu', 'Ngegosip', 'Jail', 'Gak jelas', 'Shoping', 'Chattan sama Doi', 'Chattan di WA karna Jomblo', 'Sedih', 'Kesepian', 'Bahagia'].getRandom();

    let cksft = `
        *SIFAT ${text}* 🔖
        │
        ├─❏ Nama : *${text}*
        ├─❏ Ahlak Baik : *${a}%*
        ├─❏ Ahlak Buruk : *${b}%*
        ├─❏ Orang yang : *${c}*
        ├─❏ Selalu : *${d}*
        ├─❏ Kecerdasan : *${e}%*
        ├─❏ Kenakalan : *${f}%*
        ├─❏ Keberanian : *${g}%*
        └─❏ Ketakutan : *${h}%*
    `;
    let msdpn = [
        `Anda akan menjadi orang yang kaya, keluarga yang harmonis, memiliki ${b} anak, memiliki ${d}, memiliki kendaraan, memiliki rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${c}, memiliki ${a} anak, memiliki kendaraan, memiliki rumah`,
        `Anda akan menjadi orang yang miskin, keluarga yang sederhana, memiliki ${a} anak, tidak memiliki kendaraan, rumah ngontrak`,
        `Anda akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${e} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang miskin, keluarga yang dicerai memiliki ${b} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang kaya, keluarga yang sederhana, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${a} anak, memiliki ${c} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${d} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki ${b} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang sangat kaya, keluarga yang sangat harmonis, memiliki ${e} anak, memiliki ${f} kendaraan, memiliki ${g} rumah`,
        `Anda akan menjadi orang yang sangat miskin, keluarga yang sederhana, memiliki ${g} anak, tidak memiliki kendaraan, rumah ngontrak`,
        `Anda akan menjadi orang yang kaya, keluarga yang pelit, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang pelit, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${b} anak, memiliki ${a} kendaraan, rumah ngontrak`,
        `Anda akan menjadi orang yang sangat sederhana, keluarga yang sakinah, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${a}${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${b} anak kembar, memiliki ${c} kendaraan, memiliki ${b} rumah`,
        `Anda akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak kembar dan ${a} anak lagi, memiliki ${a} kendaraan, memiliki ${a} rumah`,
    ].getRandom();

    if (command == 'ceksifat') {
        await conn.reply(m.chat, cksft, m)
    } else if (command == 'masadepannya') {
        await conn.reply(m.chat, msdpn, m)
    }
}
handler.help = ['ceksifat <nama>', 'masadepannya <nama>'];
handler.tags = ['fun'];
handler.command = ['ceksifat', 'masadepannya'];

export default handler;