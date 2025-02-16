module.exports = {
 config: {
         name: "goodmorning",
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
 if (event.body && event.body.toLowerCase() === "goodmorning") {
 return message.reply({
 body: "     「শুভ সকাল....🥀」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/soICRTA.gif")
 });
 }
 }
}