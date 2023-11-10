import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  if (!args || args.length < 1) {
    throw `Masukan Pencarian!!\ncontoh: ${usedPrefix + command} Mikey`;
  }

  let response = args.join(' ').split('|');
  let query = response[0];
  let count = parseInt(response[1]);

  if (!count) {
    try {
      var tio = await fetch(`https://api.yanzbotz.my.id/api/cari/pinterest?query=${query}`);
      var p = await tio.json();
      let url = p.result[Math.floor(Math.random() * p.result.length)];
      conn.sendFile(m.chat, url, 'loliiiii.jpg', `*_Hasil pencarian Dari ${query}_*`, m);
      await apivisit
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'Terjadi kesalahan saat menjalankan perintah.', m);
    }
  } else {
    if (count > 5) {
      throw 'Jumlah gambar terlalu banyak! Maksimal 10 gambar.';
    }
    try {
      let url = `https://api.yanzbotz.my.id/api/cari/pinterest?query=${query}`;
      let res = await fetch(url);
      let data = await res.json();
  
      let images = data.result;
  
      for (let i = 0; i < count; i++) {
        let image = images[Math.floor(Math.random() * images.length)];
        setTimeout(() => {
          conn.sendFile(m.chat, image, '', `*_Hasil pencarian Dari ${query}_*`, m);
        }, i * 5000); // Delay setiap pengiriman gambar selama 1 detik (1000 milidetik)
      }
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'Terjadi kesalahan saat menjalankan perintah.', m);
    }
  }
};
handler.help = ['pin <pencarian>|<jumlah>'];
handler.tags = ['tools','internet'];
handler.command = /^(pin)$/i;

export default handler;

//Create By bang syaii