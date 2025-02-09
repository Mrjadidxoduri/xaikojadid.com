module.exports = {
  config: {
    name: "anisad",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get anime video",
    longDescription: "get random anime video",
    category: "anime",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  anime video... Please wait! 🩵",
    });

    const link = [
      "https://i.imgur.com/TwxBlNf.mp4",// video credits xaiko-jadid (tiktok)
         "https://i.imgur.com/fnMH3nV.mp4",
      "https://i.imgur.com/fnMH3nV.mp4",
      "https://i.imgur.com/kSxsvLy.mp4",
      "https://i.imgur.com/jMia38Y.mp4",
      "https://i.imgur.com/nwdl5V0.mp4",
      "https://i.imgur.com/LMiDitG.mp4",
      "https://i.imgur.com/6Y5GpNL.mp4",
      "https://i.imgur.com/iXGvV1P.mp4",

"https://i.imgur.com/3QPs5zm.mp4",

"https://i.imgur.com/TMX9Su2.mp4",

"https://i.imgur.com/Dig5WZL.mp4",

"https://i.imgur.com/W48CRoY.mp4",

"https://i.imgur.com/5HJmV4q.mp4",

"https://i.imgur.com/Crlcn4j.mp4",

"https://i.imgur.com/bghFXyO.mp4",

"https://i.imgur.com/RdZWyvb.mp4",

"https://i.imgur.com/gHD2DVN.mp4",

"https://i.imgur.com/PhLBUtI.mp4",

"https://i.imgur.com/bHDxh4D.mp4",

"https://i.imgur.com/1NR92Qz.mp4",

"https://i.imgur.com/F5mVPSV.mp4",

"https://i.imgur.com/QyipOt1.mp4",

"https://i.imgur.com/jIL7Y3c.mp4",

"https://i.imgur.com/5ary7RR.mp4",
      "https://i.imgur.com/EBkMt4j.mp4",// Add more video links here
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '[𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝐒𝐀𝐃 𝗩𝗶𝗱𝗲𝗼...🦋🥀] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
