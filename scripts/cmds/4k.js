const a = require('axios');
const tinyurl = require('tinyurl');
const baseApiUrl = async () => {
  const base = await a.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports = {
  config: {
    name: "upscaleai",
    aliases: ["4k", "upscale"],
    version: "1.0",
    author: "Jisan",
    countDown: 15,
    role: 0,
    description: "Upscale your image.",
    category: "utility",
    guide: "{pn} reply to an image"
  },

  onStart: async  ({ message,event, api }) => {
   // let imageUrl;

    if (event.reply_to_message) {
      const botToken = "7533328541:AAHXn1DRTcV6nYFtkz0Lr0NvLpbTFiSWqcM"; 
      const fileId = event.reply_to_message.video.file_id;

      const response = await axios.get(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`);
      const filePath = response.data.result.file_path;
      const imageUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;

    try {
      const url = await tinyurl.shorten(imageUrl);
      const k = await a.get(`${await baseApiUrl()}/4k?imageUrl=${url}`);

      message.reply("✅ | Please wait...");

      const resultUrl = k.data.dipto;

      message.stream({ url: (await a.get(resultUrl,{responseType: 'stream'})).data,caption: "✅ | Image Upscaled." });
    } catch (error) {
      message.reply("❌ | Error: " + error.message);
    }
  }
  }
};
