module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "N0m Prefix",
        longDescription: "N0m Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ok") return message.reply(" 𝕾𝖚𝖕𝖊𝖗, 𝖊𝖘𝖙-𝖈𝖊 𝖖𝖚𝖊 𝖙𝖚 𝖕𝖊𝖚𝖝 𝖙'𝖆𝖇𝖔𝖓𝖓𝖊𝖗 𝖊𝖙 𝖑𝖎𝖐𝖊𝖘 à 𝖒𝖆 𝖕𝖆𝖌𝖊 𝕱𝖆𝖈𝖊𝖇𝖔𝖔𝖐 𝖊𝖙 à 𝖒𝖔𝖓 𝖈𝖔𝖒𝖕𝖙𝖊 𝖙𝖎𝖐𝖙𝖔𝖐\n𝖁𝖔𝖎𝖈𝖎 𝖑𝖊 𝖑𝖎𝖊𝖓\n❮⧠❯━━━━━━━━━━❮◆❯\nʟɪɴᴋ ғʙ : https://www.facebook.com/profile.php?id=61565694866105 \n❮⧠❯━━━━━━━━━━❮◆❯\nʟɪɴᴋ ᴛɪᴋᴛᴏᴋ : tiktok.com/the_void_kun \n❮⧠❯━━━━━━━━━━❮◆❯");
}
};
