import fetch from 'node-fetch'
import crypto from 'crypto'
import { sizeFormatter } from 'human-readable'

const format = sizeFormatter()
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner }) => {
    let _p = usedPrefix
    const linkgc = 'https://chat.whatsapp.com/IbptGVcM4lmKYk7S63sfy1'
    const domain = 'https://panel.kaxel-host.tech'
    const apikey = 'ptla_ZFb7t9n9EbQF36QtDpUMKSE68WSYzBNTxajrJ8az09K';
    const c_apikey = 'ptlc_qlzVFXbHCLB6r9iV5BTX2yOEAcAH4bQuG5DlxISjyjV'
    switch (command) {
        case 'addusr': {
            if (!isROwner) return global.dfail('rowner', m, conn)
            let t = text.split(',');
            if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
            let email = t[0];
            let username = t[1];
            let name = t[2];
            //let password
            let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
            if (!u) return m.reply(`*Format salah!*

Penggunaan:
${usedPrefix + command} email,username,name,number/tag`);
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[5]
            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username,
                    "first_name": name,
                    "last_name": "Memb",
                    "language": "en",
                    "password": password.toString()
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes

            let p = await conn.reply(m.chat, `
*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${user.created_at}

LOGIN: ${domain}

*Password telah dikirim di private chat @${u.split`@`[0]}*`, m, { mentions: [u] })
            conn.sendMessage(u, {
                text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
EMAIL: ${email}
USERNAME: ${username}
PASSWORD: ${password.toString()}

LOGIN: ${domain}

${linkgc}`,
                
            })
        }
            break
        case 'delusr': {
            if (!isROwner) return global.dfail('rowner', m, conn)
            let usr = args[0]
            if (!usr) return m.reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            //let res = await f.json()
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply('*USER NOT FOUND*')
            m.reply('*SUCCESSFULLY DELETE THE USER*')
        }
            break
        case 'listusr': {
            let page = args[0] ? args[0] : '1'
            let f = await fetch(domain + "/api/application/users?page=" + page, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json();
            let users = res.data
            let sections = []
            for (let user of users) {
                let u = user.attributes
                let obj = {
                    title: "2023 © Dann-MD",
                    rows: [
                        { title: `${u.id}. ${u.username}`, rowId: `${usedPrefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
                    ]
                }
                await sections.push(obj)
                if (sections.length === 50) {
                    sections.push({
                        title: "𝗟𝗶𝘀𝘁 𝗬𝗼𝘂𝗿 𝗨𝘀𝗲𝗿'𝘀",
                        rows: [
                            { title: `⏩ NEXT`, rowId: `${usedPrefix}listusr 2`, description: 'Page 2' },
                        ]
                    })
                }
            }
			const listMessage = {
				  text: "\nBerikut list user panel anda",
				  footer: `\nPage: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
				  title: `2023 © Dann-MD`,
				  buttonText: `${res.meta.pagination.count} User`, 
				  sections
				}
				await conn.sendMessage(m.chat, listMessage, 0)
			
            /*await conn.sendMessage(m.chat, {
                text: "Berikut list user *ibeng BOTZ HOST*",
                footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
                title: "*ibeng BOTZ HOST*",
                buttonText: `${res.meta.pagination.count} Users`,
                sections
            })*/
        }
            break
        case 'detusr': {
            let usr = args[0]
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json()
            if (res.errors) return m.reply('*USER NOT FOUND*')
            let u = res.attributes
            m.reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
        }
            break
        case 'addsrv': {
            if (!isROwner) return global.dfail('rowner', m, conn)
            let s = text.split(',');
            if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${usedPrefix + command} name,desc,userId,eggId,locId,memory/disk,cpu`)
            let name = s[0];
            let desc = s[1] || ''
            let usr_id = s[2];
            let egg = s[3];
            let loc = s[4];
            let memo_disk = s[5].split`/`;
            let cpu = s[6];

            let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = data.attributes.startup

            let f = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": desc,
                    "user": usr_id,
                    "egg": parseInt(egg),
                    "docker_image": "quay.io/hexel_hosting/nodejs_17",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "1",
                        "CMD_RUN": "node run.js"
                    },
                    "limits": {
                        "memory": memo_disk[0],
                        "swap": 0,
                        "disk": memo_disk[1],
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 20,
                        "allocations": 0,
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
        }
            break
        case 'delsrv': {
            if (!isROwner) return global.dfail('rowner', m, conn)
            let srv = args[0]
            if (!srv) return m.reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply('*SERVER NOT FOUND*')
            m.reply('*SUCCESSFULLY DELETE THE SERVER*')
        }
            break
        case 'listsrv': {
            let page = args[0] ? args[0] : '1'
            let f = await fetch(domain + "/api/application/servers?page=" + page, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json();
            let servers = res.data
            let sections = []
            for (let server of servers) {
                let s = server.attributes
                let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + c_apikey
                    }
                })
                let data = await f3.json();
                let obj = {
                    title: "2023 © Pangeran",
                    rows: [
                        { title: `${s.id}. ${s.name}`, rowId: `${usedPrefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
                    ]
                }
                await sections.push(obj)
                if (sections.length >= 50 && res.meta.pagination.links.next) {
                    sections.push({
                        title: "𝗟𝗶𝘀𝘁 𝗬𝗼𝘂𝗿 𝗦𝗲𝗿𝘃𝗲𝗿'𝘀",
                        rows: [
                            { title: `⏩ NEXT`, rowId: `${usedPrefix}listsrv 2`, description: 'Page 2' },
                        ]
                    })
                }
            }

            await conn.sendMessage(m.chat, {
                text: "Berikut list server panel anda",
                footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
                title: "2023 © Pangeran",
                buttonText: `${res.meta.pagination.count} Servers`,
                sections
            }, { quoted: m })
        }
            break
        case 'detsrv': {
            let srv = args[0]
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json();
            if (res.errors) return m.reply('*SERVER NOT FOUND*')
            let s = res.attributes
            let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + c_apikey
                }
            })
            let data = await f2.json();
            let t = data.attributes
            m.reply(`*${s.name.toUpperCase()} SERVER DETAILS*

\`\`\`STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${s.created_at}\`\`\``)
        }
            break
        case 'reinstall': {
            if (!isROwner) return global.dfail('rowner', m, conn)
            let srv = args[0]
            if (!srv) return m.reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply('*SERVER NOT FOUND*')
            m.reply('*REINSTALLING THE SERVER..*')
        }
            break
        case 'updatesrv': {
            if (!isROwner) return global.dfail('rowner', m, conn)
            let t = text.split(',');
            if (t.length < 4) return m.reply(`*Format salah*

Penggunaan:
${usedPrefix + command} srvId,locId,memory/disk,cpu`)
            let srv = t[0];
            let loc = t[1];
            let memo_disk = t[2].split`/`;
            let cpu = t[3];
            let f1 = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json()

            let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
                "method": "PATCH",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "allocation": parseInt(loc) || data.attributes.allocation,
                    "memory": memo_disk[0] || data.attributes.limits.memory,
                    "swap": data.attributes.limits.swap || 0,
                    "disk": memo_disk[1] || data.attributes.limits.disk,
                    "io": 500,
                    "cpu": cpu || data.attributes.limits.cpu,
                    "threads": null,
                    "feature_limits": {
                        "databases": 5,
                        "allocations": 5,
                        "backups": 5
                    }
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}
UPDATED AT: ${server.updated_at}`)
        }
            break
        case 'startsrv': case 'stopsrv': case 'restartsrv': {
            let action = command.replace('srv', '')
            if (!isROwner) return global.dfail('rowner', m, conn)
            let srv = args[0]
            if (!srv) return m.reply('ID nya mana?')
            let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + c_apikey,
                },
                "body": JSON.stringify({
                    "signal": action
                })
            })

            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            m.reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
        }
    }
}

handler.help = ['addusr', 'delusr', 'listusr', 'detusr', 'addsrv', 'delsrv', 'listsrv', 'detsrv', 'reinstall', 'updatesrv', 'startsrv', 'stopsrv', 'restartsrv'];
handler.command = ['addusr', 'delusr', 'listusr', 'detusr', 'addsrv', 'delsrv', 'listsrv', 'detsrv', 'reinstall', 'updatesrv', 'startsrv', 'stopsrv', 'restartsrv'];

handler.tags = ['panel']
handler.owner = true

export default handler