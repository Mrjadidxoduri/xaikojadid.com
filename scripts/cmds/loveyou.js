module.exports = {
 config: {
   name: "love you",
   version: "1.0",
   author: "Jadid",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "love you") {
 return message.reply({
 body: "𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 2 𝙅𝘼𝘿𝙄𝘿☯<3💋",
 attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/T2mCqNpH/marin-kitagawa-anime-girl.gif")
 });
 }
 }
}
