module.exports = {
 config: {
         name: "goodnight",
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
 if (event.body && event.body.toLowerCase() === "goodnight") {
 return message.reply({
 body: "     「শুভ রাতরি.....🥀」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/4HrJqNp.gif")
 });
 }
 }
}