module.exports = {
  config: {
    name: "up",
    aliases: ["up", "upt"],
    version: "1.0",
    author: "𝙓𝘼𝙄𝙆𝙊-𝙅𝘼𝘿𝙄𝘿 𝘽𝙊𝙏㊝𝘽𝙊𝙓",
    role: 0,
    shortDescription: {
      en: "Displays the uptime of the bot."
    },
    longDescription: {
      en: "Displays the amount of time that the bot has been running for."
    },
    category: "System",
    guide: {
      en: "Use {p}uptime to display the uptime of the bot."
    }
  },
  onStart: async function ({ api, event, args }) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `╭──𝙓𝘼𝙄𝙆𝙊-𝙅𝘼𝘿𝙄𝘿 𝘽𝙊𝙓✤ 𝚄𝙿 𝚃𝙸𝙼𝙴⏳👈\n├⏳ 𝙷𝙾𝚄𝚁𝚂 ${hours}\n├⏰ 𝙼𝙸𝙽𝚄𝚃𝙴𝚂 ${minutes}\n├⏲ 𝚂𝙴𝙲𝙾𝙽𝙳𝚂 ${seconds}\n╰───────────✰`;
    api.sendMessage(`${uptimeString}`, event.threadID);
  }
}
