module.exports = {
  config: {
    name: "singvid",
    version: "1.0",
    author: "Jadid",
    countDown: 20,
    role: 0,
    shortDescription: "get song video",
    longDescription: "get random sing video",
    category: "song",
    guide: "{pn}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading  sing video... Please wait! 🎶",
    });

    const link = [
      "https://drive.google.com/uc?export=download&id=1sUBJJQpmF8JQRXmq7_XFghYdZRMDCEzU",
      "https://drive.google.com/uc?export=download&id=18ICsmkZsn5UbP3g9dxOo-blNe2HH8yay",
      "https://drive.google.com/uc?export=download&id=1kAtDcA5U-cRtskrMmxD3xXC_7v0Yczln",
      "https://drive.google.com/uc?export=download&id=1A2wf79EVEhVSWfzxbcJGJf5PHuvBdqDE",
      "https://drive.google.com/uc?export=download&id=1rSXGagJAMy5ovpN1JNvp7tF1HpHQvo_x",
      "https://drive.google.com/uc?export=download&id=1OGwRlpBQ24EeHclEtIW0jV6c4gP-CQXD",
      "https://drive.google.com/uc?export=download&id=1J0MtPjkQWbbgIqujVdl59vPZRK4-K-vv",
      "https://drive.google.com/uc?export=download&id=14vUVZa6p4pNpUeB98unlQG46s6-OjD_l",
      "https://drive.google.com/uc?export=download&id=14FgYCRFiQ4iO0xjSI5GA1JOk8nukiPY_",
      "https://drive.google.com/uc?export=download&id=1ggmmi0pV6AlePPq7bvjVLmMeBOzbtaG2",
      "https://drive.google.com/uc?export=download&id=1Wgble8e6q51PBrIprwe05PNWBv_u5jtC",
      "https://drive.google.com/uc?export=download&id=1Eevj2y7UMWqMyp1ZOUjwcZeP0-6AwLlt",
      "https://drive.google.com/uc?export=download&id=1KG3v8LCv3G3gcdHyLqf9h_8L6uj2wRbG",
      "https://drive.google.com/uc?export=download&id=1BO31sM78aDIKlSMAc7cx0EZgKR_9MONd",
      "https://drive.google.com/uc?export=download&id=1dmVXgkcwREpEbc3wuBjmyA43I2Zs6dTW",
      "https://drive.google.com/uc?export=download&id=1vvL5NqPlH7sLjhUwlf9NfJge4vTaB2R-",
      "https://drive.google.com/uc?export=download&id=1CS0Sq2Ij91zQDlGpmsNSzrl6hf4nKNR-",
      "https://drive.google.com/uc?export=download&id=1kNK8jmNDlrFbrnKCqtQeWU0cNJnsCbLg",
      "https://drive.google.com/uc?export=download&id=1kYapHPL_a31TeFFKNbCOBp6OzbSfsPIr",
      "https://drive.google.com/uc?export=download&id=17jP_cJVzlsQJI3-U4FTsClyc9OfME9iP",
      "https://drive.google.com/uc?export=download&id=1-4qwbcpd0dTfIfHns9mGMngjs3Ll0qat",
      "https://drive.google.com/uc?export=download&id=1PeBv0gQ8HE1pGCfFxl-xy5YWfLF3OQwe",
      "https://drive.google.com/uc?export=download&id=1nd2MtLzaig5atnKc7L3FPh7K52RT2lRP",
      "https://drive.google.com/uc?export=download&id=17q_8y8ekx6j1pVdkBgrrUxnxqkQiX1aF",
      "https://drive.google.com/uc?export=download&id=1v5CzdRVbW5D5uhGZQpUsckSl7ClmDGZx",
      "https://drive.google.com/uc?export=download&id=1mTQmG9bA4pVYRMEqxr5vE9G61gTZMFMI",
      "https://drive.google.com/uc?export=download&id=18ySI2JfWU9bFFyqtHdp86H5JYVwNP7r8",
      "https://drive.google.com/uc?export=download&id=1u-N_0TbLRrgy5fLS1zsC5vdCzX5ll38d",
      "https://drive.google.com/uc?export=download&id=1ChehrBzGKlcwxOtrQDZIGWE2WprI09dn",
      "https://drive.google.com/uc?export=download&id=1Y1-EcGhdqezf9sfSNB_kr2VI2DR1huT5",
      "https://drive.google.com/uc?export=download&id=1mEz0I6J8-l_3Ro9owFbT8w8nVhRkrhY2",
      "https://drive.google.com/uc?export=download&id=1I3aLa6qDJm014RQUMX7_nDaZk9IvNr8n",
      "https://drive.google.com/uc?export=download&id=12mWGHuz7Mz6FyhTTAC0KXX21p67nEBQ4",
      "https://drive.google.com/uc?export=download&id=1Pq562EwTzzf_pKMD16CJE-zlfwPqlWEv",
      "https://drive.google.com/uc?export=download&id=1tTiFwFsXTWlJ-XFADdEwhBGgDDcTlXp4",
      "https://drive.google.com/uc?export=download&id=1U361xb_t4YeZp1nljtYAqyzUEcUPDBfP",
      "https://drive.google.com/uc?export=download&id=1AkpoiSORsi8aJOwf_Zrfiatxwivxc_Q5",
      "https://drive.google.com/uc?export=download&id=1ZKpZKnRrWd2ulJUgSz9EBAR1vAgvfOTj",
      "https://drive.google.com/uc?export=download&id=1dnhJolTdhppg2axPU5uPpshVj2aJIXGv",
      "https://drive.google.com/uc?export=download&id=1ISt4eardedt_jzt5DG6yUZYNewlgeA1v",
      "https://drive.google.com/uc?export=download&id=1b1y85C3VH9RqnzPfHizJPHgcpA1xzzJH",
      "https://drive.google.com/uc?export=download&id=1bgE6x9WFA40lpOyvx_j95Vwlr2ATeKwD",
      "https://drive.google.com/uc?export=download&id=11K-4AIKjATdEs2KVjs80GYES-t7tfbZF",
      "https://drive.google.com/uc?export=download&id=1lLm_Vgz9KuzLLTSs45UNy0_ciK1TSMEi",
      "https://drive.google.com/uc?export=download&id=1f6tW4wCp_VcSuEH2VNlUR65F7kxjunPl",
      "https://drive.google.com/uc?export=download&id=1S1AvajHWJbUz8Ai0ryllbDXJsxj4IXl4",
      "https://drive.google.com/uc?export=download&id=1pzPgxzExBWOw9hBR198N_vJIQOMR7T38",
      "https://drive.google.com/uc?export=download&id=1MU5y4s5N6U0TWl7jGNUiGiaX30IWtcmr",
      "https://drive.google.com/uc?export=download&id=1U7lWd8_Yt6v1gBpAB8QjFnbiEJhAlpwf",
      "https://drive.google.com/uc?export=download&id=1lagvs5D3NGop-JqUqyD_UoXiscJ94s6T",
      "https://drive.google.com/uc?export=download&id=1RhHqKseLdnl8wJJ8wJldDCTH0XBE5PDN",
      "https://drive.google.com/uc?export=download&id=1EUteOHbxHJL5yJG6gOPFNGMEpoyXD28i",
      "https://drive.google.com/uc?export=download&id=1OjucETdkkMnsMS8OJDruD4s0AfYET0ed",
      "https://drive.google.com/uc?export=download&id=15dk9a6x198DLvcTn73FpWQS8GMyrTF7l",
      "https://drive.google.com/uc?export=download&id=1tSvNO_BmFEoZjKulGOo5yJgwkgoB1Tqm",
      "https://drive.google.com/uc?export=download&id=15s0vQ5a-hMhjPAGrNccVwwal4OKu2J_O",
      "https://drive.google.com/uc?export=download&id=1F3j_cN9po0wb9iCt-hL0wbPVxYeDjJuO",
      "https://drive.google.com/uc?export=download&id=1UDBz-Sia1PIIdq-6JAr0e_WkEOrYg9mT",
      "https://drive.google.com/uc?export=download&id=10iOSOE3his6hzLDJhjsdPcsxjnw9sVZk",
      "https://drive.google.com/uc?export=download&id=1plwq0F-XlNIxp87lakJFUA4hlxhtwveo",
      "https://drive.google.com/uc?export=download&id=1tbuuBQcFISOPpxNGQ2Zu45p5b_mSF3ZA",
      "https://drive.google.com/uc?export=download&id=1ja4anO4i8sBUy5387LfF397FLGO9pPTZ",
      "https://drive.google.com/uc?export=download&id=1nZ4vpR2hh_Y_T_h7PuE_dFaVedQ8SAps",
      "https://drive.google.com/uc?export=download&id=12Fl88qCBJw2gw9opZIVeUzn8kx2aFRA9",
      "https://drive.google.com/uc?export=download&id=1Ypb6KN80YMA2u5ayJotxvOafZYcdAyG9",
      "https://drive.google.com/uc?export=download&id=1l3B9LiRqwZDDhPdhkPZKpPvbeC8pasMW",
      "https://drive.google.com/uc?export=download&id=1t_FDpyUSWELHTyf7qkwsIVGDHV1duAf9",
      "https://drive.google.com/uc?export=download&id=1ZKgJUhqH3A66pGtaHOxxI4liGVad8759",
      "https://drive.google.com/uc?export=download&id=1iY8QuxD-XN0L5FJfagdss_9L4QQyAYAM",
      "https://drive.google.com/uc?export=download&id=1y0_z5CqgmdJgSYNWkXo-IZ6UygssG3qL",
      "https://drive.google.com/uc?export=download&id=1ueXeDajTk0nVq1k-8NO3gA4sx6Dp0Qr_",
      "https://drive.google.com/uc?export=download&id=1CqS3WEdfmZaUuY9DLkWcP6_HCkP-O0YP",
      "https://drive.google.com/uc?export=download&id=1kFxfd5Kqck614oLmOErmDF-e2hU-s9Ge",
      "https://drive.google.com/uc?export=download&id=1Y_zCu12BQlnu7jmRtaHxo08jZG-oC22G",
      "https://drive.google.com/uc?export=download&id=14QalCL2T6idQJUe5iFPzGBNNIZsdAF0b",
      "https://drive.google.com/uc?export=download&id=1kLnNiLP2gx7mHvbHzprJDwSwBM-8Ukzt",
      "https://drive.google.com/uc?export=download&id=1DpEpbXZq7INIPAXO_qn6PhvHtz30v2zy",
      "https://drive.google.com/uc?export=download&id=1-YVI9jJQxsZjxf4idYst0zCTikPNJeeQ",
      "https://drive.google.com/uc?export=download&id=1yIBZiv3N9Phe7odJG-IrXryLyQTvYJkc",
      "https://drive.google.com/uc?export=download&id=1wrDfSFZ41b0QP8abGHH_wEiBz0TuikCZ",
      "https://drive.google.com/uc?export=download&id=1EsTRAep8i87xmqzaFyWOIlZ9jhUopnrQ",
      "https://drive.google.com/uc?export=download&id=1d1hxX2zr-4yn-XYIzV6e_p91GJf78nFF",
      "https://drive.google.com/uc?export=download&id=12fflpUUqC0QCMk0hiwL6tf29KgZpMp3I",
      "https://drive.google.com/uc?export=download&id=1Gweiyvkr4v40SZAUjs0C3ImmoSFm9KSj",
      "https://drive.google.com/uc?export=download&id=11pFZiJUT-Iv71-YMkmOL59hY7j3phBDH",
      "https://drive.google.com/uc?export=download&id=11PnoqPLH5yjggAG1fiwcgSWrd6jY3net",
      "https://drive.google.com/uc?export=download&id=1Z8rlFimEVVJbgK_Myd8CCjisF6Eq_5Vf",
      "https://drive.google.com/uc?export=download&id=1z_MIHtMbnfZGYAdOS1feuq3C0hgaYP-s",
      "https://drive.google.com/uc?export=download&id=1DJk9XRq2hY2GVpfnanuk6t9Z5gIw5-Dk",
      "https://drive.google.com/uc?export=download&id=1bIH5U6SERbQMD6oIINK24Inn8AxA_qQA",
      "https://drive.google.com/uc?export=download&id=1pPQJr2bPIOBjqci5IWZR9XAtgCidACKL",
      "https://drive.google.com/uc?export=download&id=1n8R7fO4NxkkvmK4rXRlb7kHb8JwUykFi",
      "https://drive.google.com/uc?export=download&id=1-MzkP7ZeDbwj0b3rxZvrHllQqKmVwCI7",
      "https://drive.google.com/uc?export=download&id=1ylZKsOXXFHjxcUwl6OJb17ouWSaESM69",
      "https://drive.google.com/uc?export=download&id=1C-hz0eDnqjGRaYUQQrwE0BKD8QC6oUSN",
      "https://drive.google.com/uc?export=download&id=1Bqic0ZpyK2Qcx-kGd5vPyb0_rDXk4Ui_",// Add more video links here
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
        body: '[Loading random sing video 🦋🎶] ',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
