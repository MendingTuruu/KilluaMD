const {
    generateSerpApiUrl
} = await (await import('../lib/serpapi.js'));

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let [tema, urutan] = text.split(/[^\w\s]/g)
    if (!tema) return m.reply("Input query!\n*Example:*\n.yandex [query]|[nomor]")

    await m.reply(wait)
    try {
        const param = {
            api_key: 'f70cce2ec221209bcd45af4533adbbc51c51b682c29251b618061115c6e95d5c',
            engine: 'yandex',
            text: tema
        };
        let all = await generateSerpApiUrl(param)
        let data = all.organic_results
        if (!urutan) return m.reply("Input query!\n*Example:*\n.yandex [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.yandex [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.yandex [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        let out = data[urutan - 1]
        let caption = `🔍 *[ HASIL ]*

📋 *Deskripsi:* ${out.title || 'Tidak ada'}
📍 *Alamat:* ${out.link || 'Tidak ada'}
📝 *Ulasan:* ${out.snippet || 'Tidak ada'}`;

        await m.reply(caption)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["yandex *[query]|[nomor]*"]
handler.tags = ["search"]
handler.command = /^(yandex)$/i
export default handler