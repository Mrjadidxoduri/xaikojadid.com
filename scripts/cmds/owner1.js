const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "noprefix",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "goodnight":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n  Goodnight Everyone Sleepwell! 🌃",
            attachment: fs.createReadStream("scripts/cmds/noprefix/goodnight.gif"),
          });
          await api.setMessageReaction("🌃", event.messageID, event.threadID, api);
        break;
case "goodmorning":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n          Goodmorning Everyone!\n                 Have A Nice Day 🌇",
            attachment: fs.createReadStream("scripts/cmds/noprefix/goodmorning.gif"),
          });
          await api.setMessageReaction("🌇", event.messageID, event.threadID, api);
   case "welcome 🌸":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n    Welcome! Enjoy Your Stay! 🌸",
            attachment: fs.createReadStream("scripts/cmds/noprefix/welcome.gif"),
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
case "prefix2":
          message.reply({
            body: "Hello, My Lord My Prefix Is » ? «",
            attachment: fs.createReadStream("scripts/cmds/noprefix/garou.gif"),
          });
          await api.setMessageReaction("🪐", event.messageID, event.threadID, api);
  case "owner":
message.reply({
body: "———»ADMIN BOT«———\n❯ Bot Name: ➳ᴹᴿ᭄𝐉𝐀𝐃𝐈𝐃-𝐗-𝐁𝐎𝐓㊗\n❯ Bot Owner: 𝐗𝐀𝐈𝐊𝐎-𝐉𝐀𝐃𝐈𝐃☠︎︎\n❯ Age: 16\n❯ Gender: Male\n❯ Facebook: https://www.facebook.com/C.E.O.NOBITA.2021\n❯ Total Group: UNKNOWN\n❯ Total Users: UNKNOWN\n❯ Bot Prefix: ,\n❯ Today is: Monday,February 5, 2024 3:33 PM\n❯ Thanks for using 𝐉𝐀𝐃𝐈𝐃-𝐗-𝐁𝐎𝐓",
            attachment: fs.createReadStream("scripts/cmds/noprefix/goodnight.gif"),
          });
          await api.setMessageReaction("😙", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
