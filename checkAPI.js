const axios = require("axios");
const { log } = require("./utils"); // Adjust the path as necessary
const settings = require("./config/config");

const urlChecking = "https://raw.githubusercontent.com/Boyoke-Encok/api-id/refs/heads/main/bot.json";

async function checkBaseUrl() {
  console.log("Checking api...".blue);
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi(urlChecking);
    if (result.bot) {
      log("No change in api!", "success");
      return result;
    }
  } else {
    return {
      bot: settings.BASE_URL,
      message:
        "BY : BOYOKE ENCOK",
    };
  }
}

async function getBaseApi(url) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    if (content?.animix) {
      return { bot: content.animix, message: content.copyright };
    } else {
      return {
        bot: null,
        message:
          "BY : BOYOKE ENCOK",
      };
    }
  } catch (e) {
    return {
      bot: null,
      message:
        "BY : BOYOKE ENCOK",
    };
  }
}

module.exports = { checkBaseUrl };
