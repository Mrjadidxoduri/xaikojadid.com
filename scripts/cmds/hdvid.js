module.exports = {
  config: {
    name: "Hdvid",
    version: "1.0",
    author: "----",
    countDown: 20,
    role: 0,
    shortDescription: "get hdvid video",
    longDescription: "get random hdvid video",
    category: "hd video",
    guide: "{pn} hdvidvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading random HD Video 🤭video... Please wait! 🕐",
    });

    const link = [
      "https://i.imgur.com/bozDAye.mp4",// video credits xenoz (youtube)
      "https://i.imgur.com/sOSnZFd.mp4",
      "https://i.imgur.com/yyp9YIs.mp4",
      "https://i.imgur.com/O2XvS7X.mp4",
      "https://i.imgur.com/BwLMwuI.mp4",
      "https://i.imgur.com/Qc2nCRE.mp4",
      "https://i.imgur.com/m0j3YrR.mp4",
      "https://i.imgur.com/OmQA23z.mp4",
      "https://i.imgur.com/yEvKUcN.mp4",
      "https://i.imgur.com/HRQxLDB.mp4",
      "https://i.imgur.com/Bl6bp1v.mp4",
      "https://i.imgur.com/VcZpVjz.mp4",
      "https://i.imgur.com/y8PxXD6.mp4",
      "https://i.imgur.com/OmQA23z.mp4",
      "https://i.imgur.com/zd1S4FN.mp4",
      "https://i.imgur.com/f4LBdXX.mp4",
      "https://i.imgur.com/iR1aU0u.mp4",
      "https://i.imgur.com/lTIC17T.mp4",
      "https://i.imgur.com/8IRYKzU.mp4",
      "https://i.imgur.com/aWpL7qo.mp4",
      "https://i.imgur.com/EjYTjCq.mp4",
      "https://i.imgur.com/qIfr6rt.mp4",
      "https://i.imgur.com/LU9jPqX.mp4",
      "https://i.imgur.com/wdfw4uX.mp4",
      "https://i.imgur.com/SYEQncd.mp4",
      "https://i.imgur.com/PudEc9O.mp4",
      "https://i.imgur.com/7jWyw2S.mp4",
      "https://i.imgur.com/FU8Ieob.mp4",
      "https://i.imgur.com/PudEc9O.mp4",
      "https://i.imgur.com/JXXQ767.mp4",
      "https://i.imgur.com/ODexXk1.mp4",
      "https://i.imgur.com/YryGkkJ.mp4",              
"https://i.imgur.com/5qviir2.mp4",
"https://i.imgur.com/ipoIocF.mp4",
"https://i.imgur.com/YtcGxsz.mp4",
"https://i.imgur.com/e5erJcm.mp4",
"https://i.imgur.com/0OvlbNP.mp4",
"https://i.imgur.com/lvyZkcA.mp4",
"https://i.imgur.com/IqwtXjY.mp4",
"https://i.imgur.com/ap6CQPK.mp4",
"https://i.imgur.com/rBPRpn8.mp4",
"https://i.imgur.com/PadIxYI.mp4",
"https://i.imgur.com/AJR2OMe.mp4",
"https://i.imgur.com/ap6CQPK.mp4",
"https://i.imgur.com/rBPRpn8.mp4",
"https://i.imgur.com/rBPRpn8.mp4",
"https://i.imgur.com/PadIxYI.mp4",
"https://i.imgur.com/xsCgIbi.mp4",
"https://i.imgur.com/YdFXck3.mp4",
"https://i.imgur.com/YdFXck3.mp4",
"https://i.imgur.com/RipTILJ.mp4",
// Add more video links here
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
        body: 'Onwer-MR-JISAN+XAIKO-RAMBO ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
