import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { en, es, id, ar, pt, fr, hi } from './lib/idiomas/total-idiomas.js'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
  ['6285934362661', "ᴋᴏᴋᴏᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×", "ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ", "pangeran.dwnta01@gmail.com", true ], // global owner 1
  ['62859343626616', "𝐊𝐈𝐋𝐋𝐔𝐀 𝐙𝐎𝐋𝐃𝐘𝐂𝐊", "Bot WhatsApp", "pangeran.dwnta01@gmail.com", true ], // global owner 2
  ['6285934362661', "ᴋᴏᴋᴏᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×", "ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ", "pangeran.dwnta01@gmail.com", true ] // global owner 3
]
global.mods = ['6285934362661']
global.prems = ['6285934362661']
// Info
global.nomorown = '6285934362661'
global.nomorown2 = '62859343626616'
global.packname = '•Killua Zoldyck• By'
global.author = '© Pangeran'
global.namebot = 'Killua Zoldyck'
global.wm = '•Killua Zoldyck• | © Pangeran'
global.stickpack = '© Sticker By'
global.stickauth = 'Killua Zoldyck'
global.fotonya = 'https://telegra.ph/file/37d8fd02c71d465169239.jpg'
global.fotonya2 = `https://telegra.ph/file/37d8fd02c71d465169239.jpg`
// Link Sosmed
global.sig = 'https://instagram.com/kokopangeran_'
global.syt = 'https://youtube.com/@PangeranD'
global.sgh = 'https://github.com/MendingTuru'
global.syp = 'https://paypal.me/pangeran'
global.sgc = 'https://chat.whatsapp.com/IbptGVcM4lmKYk7S63sfy1'

//BETA: Jika Anda ingin menghindari mengetik nomor yang akan menjadi bot di konsol, saya menambahkan dari sini:
//Hanya berlaku untuk opsi 2 (jadilah bot dengan kode teks 8 digit)
global.botNumberCode = "" //Ejemplo: +628xxxx
global.confirmCode = ""
global.baileys = "@whiskeysockets/baileys"
global.vs = "1.7.0"
global.vsJB = "2.5 (Beta)"
//key de violetics
global.Key360 = ["964f-0c75-7afc"]

//⊱ ━━━━━.⋅ BAHASA : BAHASA ⋅.━━━━ ⊰
//Tambahkan Bahasa yang Anda inginkan untuk dimiliki oleh GataBot-MD
//Tambahkan bahasa yang Anda inginkan untuk dimiliki GataBot-MD
// is = ID Spanyol = Bahasa Indonesia
// dalam = Bahasa Inggris pt = Portugis
// ar = Arab hi = Bahasa Hindi

global.lenguajeGB = id //Idioma de GataBot, Ejemplo: es | en | pt...

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

// Donasi
global.psaweria = 'https://s.id/pangeran'
global.ptrakterr = 'https://lynk.id/pangeran'
global.povo = '085934362661'
// Info Wait
global.wait = 'Loading...'
global.asing = '```Cieeee Orang Asing Join```\n*Bye Bye Sir😋*'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.logo = ImgMountain()
global.giflogo = VideoGalau()
global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
global.multiplier = 69 
// Apikey
global.lol = 'rara'
global.rose = 'Rk-KayzAzzah'
global.xyro = 'ClaraKeyOfficial'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "ClaraKeyOfficial",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/* Randomizer */
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

/* Img Array */
function ImgMountain() {
    let ResNo = pickRandom([
        "https://i.pinimg.com/originals/aa/5d/6b/aa5d6b2c0cb3e132256d0a34590e235e.jpg",
        "https://i.pinimg.com/originals/ec/11/7a/ec117a2614aad453a8b8f1a7d00cb7ce.jpg",
        "https://i.pinimg.com/originals/f3/34/2d/f3342d4cb66034549bb7d0562cbc3633.jpg",
        "https://i.pinimg.com/originals/a6/60/53/a66053fe7a3b721ba8f7c93b879c5862.jpg",
        "https://i.pinimg.com/originals/3b/f9/3d/3bf93d7b3307825f4f0dfd8e2ec5e575.jpg",
        "https://i.pinimg.com/originals/ee/ba/21/eeba217aa08f2468a88c905a90c97383.jpg",
        "https://i.pinimg.com/originals/ec/cf/02/eccf02eea6ade8eafcb526707ff1ddd7.jpg",
        "https://i.pinimg.com/originals/99/c1/e2/99c1e280602e10f3ed910201d9f99f15.jpg",
        "https://i.pinimg.com/originals/21/a7/0f/21a70f9a75224b8c0d9559dd85a4246a.jpg",
        "https://i.pinimg.com/originals/96/98/4a/96984acecb058f36eeaaac938f4ddb92.jpg",
        "https://i.pinimg.com/originals/61/e0/3e/61e03e5563fdb013713a6b7e4a0c6299.jpg",
        "https://i.pinimg.com/originals/de/ae/68/deae68529e294c158ef6b98a9a6fb4e8.jpg",
        "https://i.pinimg.com/originals/c2/47/e9/c247e913a0214313045a8a5c39f8522b.jpg",
        "https://i.pinimg.com/originals/9c/f0/5b/9cf05b78ccba55bcbd2a16c5eef98a9a.jpg",
        "https://i.pinimg.com/originals/1e/78/b3/1e78b322fbac6b0eb21568ae0df14899.jpg",
        "https://i.pinimg.com/originals/cc/53/b9/cc53b9978f0683f1fb2d3436d1e04cd9.jpg",
        "https://i.pinimg.com/originals/8f/4b/e7/8f4be75d7795909bb8d4165530ad104e.jpg",
        "https://i.pinimg.com/originals/35/66/1a/35661a62490f0f974f334bfe3fbefd08.jpg",
        "https://i.pinimg.com/originals/3b/b9/25/3bb9254eb8cd02a856a3f2e87941f3bc.jpg",
        "https://i.pinimg.com/originals/b5/86/84/b58684e8cbedd5599be8a35cfbef88c4.jpg",
        "https://i.pinimg.com/originals/3f/22/11/3f221120c10a57db349a2b5804954ecc.jpg",
        "https://i.pinimg.com/originals/66/f3/d5/66f3d5260cbb00a862ce6c3b6c88e0f3.jpg",
        "https://i.pinimg.com/originals/7d/b4/43/7db443580f995faaae6c570cd6292c0e.jpg",
        "https://i.pinimg.com/originals/c3/8a/c8/c38ac8e163d09254f86afa331da35693.jpg",
        "https://i.pinimg.com/originals/1d/3f/43/1d3f4336e6d4d0b3bf9b1d42948db42c.jpg",
        "https://i.pinimg.com/originals/f2/5b/99/f25b991ddcb29cb1618a90d9a3f6e195.jpg",
        "https://i.pinimg.com/originals/48/fe/d2/48fed2d57c5cc400e8b08624057e5962.jpg",
        "https://i.pinimg.com/originals/b8/77/e3/b877e31fddd858cfb93a4665ea85f2b2.jpg",
        "https://i.pinimg.com/originals/9c/f2/22/9cf222c76b02487c040b2ed7e67772e6.jpg",
        "https://i.pinimg.com/originals/7d/e4/28/7de428e023d0885d569085e4038366a4.jpg",
        "https://i.pinimg.com/originals/54/98/6f/54986f0c8be26b1e9d267eca83e6464e.jpg",
        "https://i.pinimg.com/originals/80/71/fc/8071fc8df3486bd590031c377991d326.jpg",
        "https://i.pinimg.com/originals/e2/09/ec/e209ec33eca8f41b5efb997c2c10d789.jpg",
        "https://i.pinimg.com/originals/eb/c2/8e/ebc28e2de0281a39564ce13785427bba.jpg",
        "https://i.pinimg.com/originals/0a/ef/89/0aef89e26c85955d1920cc7cb49f741d.jpg",
        "https://i.pinimg.com/originals/87/23/0b/87230b5d1d976da44ad807a24c907e4d.jpg",
        "https://i.pinimg.com/originals/93/e5/92/93e592d3f3c7dbe2116ad2aff3ea60ac.jpg",
        "https://i.pinimg.com/originals/21/d3/51/21d3519583bc875eab677721609cebda.jpg",
        "https://i.pinimg.com/originals/f3/9c/f9/f39cf9e62b0d1e8466c19da3df177187.jpg",
        "https://i.pinimg.com/originals/ce/b3/b1/ceb3b1a3cc3dc8196b552954ced99120.jpg",
        "https://i.pinimg.com/originals/7b/f7/e9/7bf7e9f97183da57b8484377b425d836.jpg",
        "https://i.pinimg.com/originals/49/da/42/49da42d7674723cadb5cb53d891b786f.jpg",
        "https://i.pinimg.com/originals/b0/62/ca/b062ca884ee47ace132438f3c59e528c.jpg",
        "https://i.pinimg.com/originals/2e/cb/b9/2ecbb9815dcb949394e275f3f2344f21.jpg",
        "https://i.pinimg.com/originals/1b/e7/3d/1be73d6e2f0a04b9ab2a17be1b4ca3db.jpg",
        "https://i.pinimg.com/originals/88/5a/63/885a63d92ca0e0bb7e6a1a6468eeec34.jpg",
        "https://i.pinimg.com/originals/2d/53/31/2d53311f6daf9b34da29bf1b5cbd94dc.jpg",
        "https://i.pinimg.com/originals/55/c3/00/55c30083a1ab2a4eb6d6a8eefb70d378.jpg",
        "https://i.pinimg.com/originals/62/ab/ff/62abffe77a2a3d761c413715163f1def.jpg",
        "http://images8.alphacoders.com/465/465337.jpg",
        "https://i.pinimg.com/originals/cf/6d/3c/cf6d3c9d4b5a4619cc9e811538cffa1f.jpg",
        "https://i.pinimg.com/originals/b9/a2/f5/b9a2f5008086737dfd83acd224384921.jpg",
        "https://i.pinimg.com/originals/da/fd/ac/dafdaca428707259bfb53f8231e20128.jpg",
        "https://i.pinimg.com/originals/d5/44/35/d54435546190f59cbce81e2de4fcdce2.jpg",
        "https://i.pinimg.com/originals/19/6d/18/196d18bcde7d5edb043b3f42193b1b7e.jpg",
        "https://i.pinimg.com/originals/a6/5d/71/a65d715e2ea90674a3da47b18ea3f76d.jpg",
        "https://i.pinimg.com/originals/cb/7c/06/cb7c0603ecca2769ea084fe1d54f0efb.jpg",
        "https://i.pinimg.com/originals/cb/e7/75/cbe77587ced910e685b103dbe9cee22d.jpg",
        "https://i.pinimg.com/originals/97/48/c8/9748c89901310c7303325daacaf221b7.jpg",
        "https://i.pinimg.com/originals/65/85/9d/65859d99b5ea7773b03ba439e264758e.jpg",
        "https://i.pinimg.com/originals/e5/39/b2/e539b2428bc825f0cf34ce940abe4b32.jpg",
        "https://i.pinimg.com/originals/e6/41/60/e641608ddb553ab101a3c0f876b5327b.jpg",
        "https://i.pinimg.com/originals/3d/74/63/3d74639d40ae75295fd25719ce35b886.jpg",
        "https://i.pinimg.com/originals/6d/3d/62/6d3d626e924965f0c981c1e13506fb95.jpg",
        "https://i.pinimg.com/originals/e8/1e/69/e81e691422e1d329d2d226da9e2c0081.jpg",
        "https://i.pinimg.com/originals/1c/63/69/1c6369449ac5f6dafa874f2ba764e1a9.jpg",
        "https://i.pinimg.com/originals/84/66/b4/8466b4910a07e734508bcc52c8d357c4.jpg",
        "https://i.pinimg.com/originals/02/2d/69/022d69fbcb99520637556272fdde241d.jpg",
        "https://i.pinimg.com/originals/4a/51/cc/4a51ccad1c975fce7d18d8cb24aa5954.jpg",
        "https://i.pinimg.com/originals/03/ca/74/03ca743d22fab4d1c7d6732d0e2b15a5.jpg",
        "https://i.pinimg.com/originals/5f/cb/19/5fcb190ecc4fdb0ecb7e54060924e453.jpg",
        "https://i.pinimg.com/originals/8c/6a/67/8c6a67b9a1e4db6b5a6a82000104633f.jpg",
        "https://i.pinimg.com/originals/2e/62/68/2e626897112f2cc1d2b0835d8909afa8.jpg",
        "https://i.pinimg.com/originals/df/b4/67/dfb467128bb4644031104dac0608621c.jpg",
        "https://i.pinimg.com/originals/04/e1/7f/04e17f990ebfd79b42eb12c361d8a575--scenery-wallpaper-mountain-wallpaper.jpg",
        "https://i.pinimg.com/originals/22/fc/e8/22fce8c13e9a69263f3cd99c4b6b4e1e.jpg",
        "https://i.pinimg.com/originals/61/3e/53/613e53cc12574047390b3092424c19bb.jpg",
        "https://i.pinimg.com/originals/58/73/9a/58739ac63a86a89c81d5ae3f091ae3db.png",
        "https://i.pinimg.com/originals/e3/13/a0/e313a08e5b0455b1d2b5f345b2cdb97f.jpg",
        "https://i.pinimg.com/originals/32/2f/58/322f58c9ddd595ebfb7b2c2a3c587917.jpg",
        "https://i.pinimg.com/originals/82/4c/75/824c75d5d8baddac1e3ab99a48b77f36.jpg",
        "https://i.pinimg.com/originals/46/ad/cd/46adcdf3759f47ba7a68870d7194a88f--iphone--wallpaper-inline.jpg",
        "https://i.pinimg.com/originals/3f/93/0d/3f930d8a3dbe2c35ba74ee5a9331e4be.jpg",
        "https://i.pinimg.com/originals/e4/43/80/e4438039732d455a68f9b5e4250d6fb6.jpg",
        "https://i.pinimg.com/originals/dd/92/e9/dd92e943701fadf503fec70e00442783.jpg",
        "https://i.pinimg.com/originals/7e/3b/b7/7e3bb74bae008f000776788a05572180.jpg",
        "https://i.pinimg.com/originals/f9/f7/71/f9f7715648cecfe9ed11ec45be79f468.jpg",
        "https://i.pinimg.com/originals/f3/f6/c7/f3f6c704fc6acb2bd9e284de51e713c4.jpg",
        "https://i.pinimg.com/originals/eb/2a/ec/eb2aec5af95be9dcf884b4872c6f4a95.jpg",
        "https://i.pinimg.com/originals/1d/16/fd/1d16fd2a0323fa59fc71bf3247a86e4f.jpg",
        "https://i.pinimg.com/originals/fd/78/6e/fd786ecc8e2636581af7b5c3fa913179.jpg",
        "https://i.pinimg.com/originals/03/ed/a6/03eda666f4d6fe3fead56b4fb5eeac27.jpg",
        "https://i.pinimg.com/originals/be/52/3f/be523fd1853576e6aeb97d9aa5b6f6da--nature-wallpaper-hd-wallpaper.jpg",
        "https://i.pinimg.com/originals/42/2c/92/422c92ec50721fd5dd7d399085595be3.jpg",
        "https://i.pinimg.com/originals/b7/79/46/b7794614b3cbd9379957c32d681eb98d.jpg",
        "https://i.pinimg.com/originals/70/e8/c0/70e8c0e5576bcb7f6cad93df41e77fc2.jpg",
        "https://i.pinimg.com/originals/9a/c1/9d/9ac19dd1d82ce23fa7839251bab7d7d5.jpg",
        "https://i.pinimg.com/originals/ae/db/4c/aedb4c77e9946e9e7127ab330cc7efb4.jpg",
        "https://i.pinimg.com/originals/5c/bf/ca/5cbfca02940248e6617eea9b31911cbf.jpg"
])
    return ResNo
}

/* Img Array */
function VideoGalau() {
    let Galau = pickRandom([
"https://telegra.ph/file/c83205eeeecceb9e4db87.mp4",
"https://telegra.ph/file/a001c30cafa587a3bef2c.mp4",
"https://telegra.ph/file/09cf5ac786cbfda551617.mp4",
"https://telegra.ph/file/e696afd2cfe29a199be11.mp4",
"https://telegra.ph/file/5be5e3696c03edff2772b.mp4",
"https://telegra.ph/file/b9b3dece43e557b4addc1.mp4",
"https://telegra.ph/file/a33e23d6736f8cb40b4fb.mp4",
"https://telegra.ph/file/3426da3a67bdc0238bd46.mp4",
"https://telegra.ph/file/394386e5dff94ccff2323.mp4",
"https://telegra.ph/file/1a1cf22235249f0a459e5.mp4",
"https://telegra.ph/file/a5578746d1abf176894ed.mp4",
"https://telegra.ph/file/99dcebf89c97f13f4f657.mp4",
"https://telegra.ph/file/6a808e89640f23ecfc936.mp4",
"https://telegra.ph/file/2e35480077a5eae3b2a1e.mp4",
"https://telegra.ph/file/6c5ba9ed473f188a963b2.mp4",
])
    return Galau
}