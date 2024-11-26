module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝕊𝕒𝕝𝕦𝕥 𝕝'𝕒𝕞𝕚(𝕖) 𝕒𝕓𝕠𝕟𝕟𝕖 𝕥𝕠𝕚 𝕒 𝕞𝕒 𝕡𝕝𝕒𝕔𝕖 𝕖𝕥 𝕚𝕟𝕧𝕚𝕥𝕖 𝕥𝕖𝕤 𝕒𝕞𝕚𝕤 𝕤𝕥𝕡\n \n❥𝐍𝐀𝐌𝐄:𝖙𝖍𝖊 𝖛𝖔𝖎𝖉 𝖐𝖚𝖓\n❥𝐋𝐈𝐍𝐊: https://www.facebook.com/profile.php?id=61565694866105")
}
};
