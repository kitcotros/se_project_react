const coordinates = { lat: "35.196109", lon: "-89.679462" };
const apiKey = "34bdb11698303a702c9b9355e4bd3631";

const weatherConditionImages = {
  day: {
    clear: {
      name: "clear",
      image: new URL("../assets/day/clear.png", import.meta.url).href,
    },
    clouds: {
      name: "cloudy",
      image: new URL("../assets/day/cloudy.png", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/day/default.png", import.meta.url).href,
    },
  },
  night: {
    clear: {
      name: "clear",
      image: new URL("../assets/night/clear.png", import.meta.url).href,
    },
    clouds: {
      name: "cloudy",
      image: new URL("../assets/night/cloudy.png", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/night/default.png", import.meta.url).href,
    },
  },
};

export { coordinates, apiKey, weatherConditionImages };
