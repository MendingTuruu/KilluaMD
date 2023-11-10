/*import axios from "axios"

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) throw 'Example: .txt2img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
m.reply(`_Generating Images ${text}_`)
const payloads = {
  server_name: "rose",
  prompt: text,
  negative_prompt: "nsfw, bad anatomy, lowres, extra hands, extra legs, extra finger",
  width: 512,
  height: 768,
  steps: 25,
  model_id: "anything-v5",
  sampler: "UniPC",
  cfg: 7.5,
  seed: "",
  enhance_prompt: "yes",
  multi_lingual: "no",
  image_num: 1,
  panorama: "no",
  safety_checker: "no",
  safety_checker_type: "blur",
  lora_model: "hayasakaAi",
  "lora_strength": 1,
  clip_skip: 2,
  embeddings_model: "",
  webhook: ""
}
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/diffusion/txt2img",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		data: payloads,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data; 
if (!status) {
	return m.reply(message);
}
const { result } = data;
let metadata = `*model_id:* ${result.metadata.model_id}\n*negative_prompt:* ${result.metadata.negative_prompt}\n*scheduler:* ${result.metadata.scheduler}\n*width:* ${result.metadata.W}\n*height:* ${result.metadata.H}\n*scale:* ${result.metadata.guidance_scale}\n*seed:* ${result.metadata.seed}\n*steps:* ${result.metadata.steps}\n*samples:* ${result.metadata.n_samples}\n*lora_model:* ${result.metadata.lora}\n*lora_strength:* ${result.metadata.lora_strength}`
await conn.reply(m.chat, metadata, m)
await conn.sendFile(m.chat, result.images[0], 'conco.jpg', ``, m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.limit = true
handler.premium = true

export default handler*/

import { Prodia } from "prodia.js";
const apiKey = "df165bab-9893-4f02-92bf-e8b09592b43a";
const prodia = new Prodia(apiKey);

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    const input_data = await prodia.getSDmodels();

    let [urutan, tema] = text.split("|")
    if (!tema) return m.reply("Input query!\n*Example:*\n.txt2img [nomor]|[query]")

    await m.reply(wait)
    try {
        let data = input_data.map((item, index) => ({
            title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
            id: item
        }));
        if (!urutan) return m.reply("Input query!\n*Example:*\n.txt2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.txt2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.txt2img [nomor]|[query]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        let out = data[urutan - 1].id

        const generateImageParams = {
            prompt: encodeURIComponent(tema),
        model: out,
        sampler: "DPM++ SDE Karras",
        cfg_scale: 9,
        steps: 30,
        aspect_ratio: "portrait"
        };
        const openAIResponse = await generateImage(generateImageParams);

        if (openAIResponse) {
            const result = openAIResponse;
            const tag = `@${m.sender.split('@')[0]}`;

            await conn.sendMessage(m.chat, {
                image: {
                    url: result.imageUrl
                },
                caption: `Nih effect *${out}* nya\nRequest by: ${tag}`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["txt2img *[nomor]|[query]*"]
handler.tags = ["ai"]
handler.command = /^(txt2img)$/i
export default handler

async function generateImage(params) {
    const generate = await prodia.generateImage(params);

    while (generate.status !== "succeeded" && generate.status !== "failed") {
        await new Promise((resolve) => setTimeout(resolve, 250));

        const job = await prodia.getJob(generate.job);

        if (job.status === "succeeded") {
            return job;
        }
    }
}