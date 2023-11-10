import fetch from 'node-fetch'
const handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
            if (!isOwner) return m.reply(`Khusus Pangeran Aja`);
            let srv = args[0];
            if (!srv) return m.reply('ID nya mana?');
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            let res = f.ok ? {
                error: null
            } : await f.json();
            if (res.error) return m.reply('*SERVER NOT FOUND*');
           m.reply('*BERHASIL BUKA SUSPEND..*');
        }
handler.help = ['unsuspend'].map(v => v + 'ID nya')
handler.tags = ['owner']
handler.command = /^(unsuspend)$/i
//handler.owner = true
export default handler