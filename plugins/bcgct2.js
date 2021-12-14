let handler  = async (m, { itsu, text, usedPrefix, command }) => {
let groups = itsu.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
if (!text) throw `uhm.. teksnya mana?\nContoh :\n\n${usedPrefix + command} Halo | Tampilkan Menu | #menu | Owner | #owner`
m.reply(global.wait)
let [t1, t2, t3, t4, t5] = text.split`|`
itsu.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
for (let id of groups) await itsu.send2Button(id, t1 + '\n\n' + readMore + ` 「 ${bc} Group Broadcast 」`, footer, t2, t3, t4, t5)
m.reply('Selesai Broadcast All Group 👍')
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group2|grup2|gc2)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
