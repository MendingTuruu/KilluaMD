const isVirtex = /ﱣﱣﱣﱣﱣﱣﱣ|؀؁؀؁|᥋᥋᥋᥋᥋᥋᥋᥋᥋|[🎩]-𝑬𝒙𝒑𝒍𝒐𝒔𝒊𝒐𝒏-💥|ผิด| ⃢|𒅒ܷܷܷܷܷ֭֭֭֭֭֭֭֭֭ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊ࠝࠝࠝࠝࠝࠝࠝ𒅒ܷܷܷܷܷۣۣۣۣۣۣۣۣۣۣۣۣۣۣٚٚٚٚٚٚٚٚٚٚٚٚٚٚٚٚ̂̂̂̂̂̂̂̂̂̂̂̂̂̂̂ۜۜۜۜۜۜ˳֗֗֗֗֗ࠧࠧࠧࠧࠬࠬࠬࠬࠬࠬࠬͦͦͦͦͦͦͦͦࠝࠝࠝࠝ𒅒ۣۣۣۣۣۣۣۣۣ֗֗̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊̊ 𑂺𑂺𑂺𑂺𑂺ۣۣۣۣۣۣۣۣۣۣۣۣۣۜۜۜۜۜۜۜۜۜۜۜ̂̂̂̂̂̂̂̂̂̂̂ࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧࠧ֯֯֯֯֯˳ْْْْْ֛֛֛ۨۨۨۨۨۨۨۨۨۨۨ |؛*.*ࣨࣨ|৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ|ท้่เึางื|𖣘𝓜꙰⃢⃠⃠⃠⃠⃠/i // tambahin sendiri
export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let isAntiVirtex = isVirtex.exec(m.text)
    if (chat.antiVirtex && isAntiVirtex && m.isGroup) {
        if (isBotAdmin && !isAdmin) {
            await conn.reply(m.chat, 'Kamu Terdeteksi Mengirim Font Aneh!\n\nMaka Kamu Akan Dikick', false)
            conn.sendMessage(m.chat, { delete: m.key })
        } else {
            conn.reply(m.chat, 'Kamu Terdeteksi Mengirim Font Aneh\n\nBot Bukan Admin :(')
        }
    }
    return
}