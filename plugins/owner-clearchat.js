/*let handler = async (m, { conn }) => {
  try {
    const chats = Object.values(conn.chats);
    
    const gusChats = chats.filter(item => /@g\.us$/.test(item.id));
    const whatsappNetChats = chats.filter(item => /@[gs].whatsapp.net$/.test(item.id));
    
    const gusChatCount = gusChats.length;
    const whatsappNetChatCount = whatsappNetChats.length;

    for (const chat of gusChats) {
      await conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, chat.id);
    }

    for (const chat of whatsappNetChats) {
      await conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, chat.id);
    }

    await conn.reply(m.chat, `*Jumlah Group:* ${gusChatCount}\n*Jumlah Chat:* ${whatsappNetChatCount}`, m);
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'Terjadi kesalahan dalam menghapus Group & Chat.', m);
  }
}

handler.help = ['clearchat']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(clearcha?t)$/i;

export default handler;*/