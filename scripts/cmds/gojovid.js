module.exports = {
  config: {
    name: "gojovid",
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
      body: "Loading  gojo video... Please wait! 🩶",
    });

    const link = [
      "https://i.imgur.com/oLZ0l8g.mp4",// video credits xaiko-jadid (tiktok)
         "https://i.imgur.com/K3uIYhU.mp4",
      "https://i.imgur.com/ZNX9mat.mp4",
      "https://i.imgur.com/ZNX9mat.mp4",
      "https://i.imgur.com/yIYuURx.mp4",
      "https://i.imgur.com/JJZv19y.mp4",
      "https://i.imgur.com/FldshPX.mp4",
      "https://i.imgur.com/xiLfjKc.mp4",
      "https://i.imgur.com/Ff6BSmM.mp4",

"https://i.imgur.com/gMGkbWl.mp4",

"https://i.imgur.com/cHxlXgi.mp4",

"https://i.imgur.com/NugcgZc.mp4",

"https://i.imgur.com/vzFRimn.mp4",

"https://i.imgur.com/RjzOqab.mp4",

"https://i.imgur.com/OWaWK0u.mp4",

"https://i.imgur.com/6Q6wMuZ.mp4",

"https://i.imgur.com/ptZE3cA.mp4",

"https://i.imgur.com/2adTPjf.mp4",

"https://i.imgur.com/eYTdUED.mp4",

"https://i.imgur.com/NolDscd.mp4",

"https://i.imgur.com/tGjlKL1.mp4",

"https://i.imgur.com/Rfj7234.mp4",

"https://i.imgur.com/hWfxtLC.mp4",

"https://i.imgur.com/U5h3miE.mp4",

"https://i.imgur.com/we3OnZC.mp4",

"https://i.imgur.com/AaCW0Ut.mp4",

"https://i.imgur.com/72rYTVx.mp4",

"https://i.imgur.com/8RV9OkO.mp4",

"https://i.imgur.com/HCfsxD6.mp4",
      "https://i.imgur.com/aQ9SvTL.mp4",// Add more video links here
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
        body: '[Loading random gojo video ☯️] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
