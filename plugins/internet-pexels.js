import fetch from "node-fetch"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text) throw "Masukan Textnya\nContoh: .pexels mountain"
    try {
            await m.reply(wait)
            let outs = await searchPexels(text)
            let res = outs.photos
            let v = res[Math.floor(Math.random() * res.length)];
            let teks = `
*ID:* ${v.id || 'Tidak diketahui'}
*Width:* ${v.width || 'Tidak diketahui'} Original
*Height:* ${v.height || 'Tidak diketahui'} Original
*Url:* ${v.url || 'Tidak diketahui'}
*Photographer:* ${v.photographer || 'Tidak diketahui'}
*Photographer Url:* ${v.photographer_url || 'Tidak diketahui'}
*Photographer ID:* ${v.photographer_id || 'Tidak diketahui'}
*Avg Color:* ${v.avg_color || 'Tidak diketahui'}
*Liked:* ${v.liked || 'Tidak diketahui'}
*Alt:* ${v.alt || 'Tidak diketahui'}
*Url:*\n${Object.values(v.src).join('\n\n')}
`
                await conn.sendFile(m.chat, v.src.original || v.src['large2x'] || v.src.large || v.src.medium || v.src.small || v.src.portrait || v.src.landscape || v.src.tiny, v.alt || 'Tidak diketahui', teks, m)
            
    } catch (e) {
        throw eror
    }
}
handler.help = ['pexels']
handler.tags = ['internet']
handler.command = /^(pexels)$/i
handler.limit = true
export default handler

const APIKEY = "563492ad6f91700001000001e82bd3aea51a4f18a30b09ce81aacb33";

async function searchPexels(query) {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: APIKEY,
      SameSite: "None",
    },
  });
  const data = await response.json();
  return data;
}
