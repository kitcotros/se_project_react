const coordinates = { lat: "35.196109", lon: "-89.679462" };

const apiKey = "34bdb11698303a702c9b9355e4bd3631";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.kitroswtwr.soon.it"
    : "http://localhost:3001";

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
    fog: {
      name: "fog",
      image: new URL("../assets/day/fog.png", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rain.png", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.png", import.meta.url).href,
    },
    thunderstorm: {
      name: "thunderstorm",
      image: new URL("../assets/day/storm.png", import.meta.url).href,
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
    fog: {
      name: "fog",
      image: new URL("../assets/night/fog.png", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rain.png", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snow.png", import.meta.url).href,
    },
    thundestorm: {
      name: "thunderstorm",
      image: new URL("../assets/night/storm.png", import.meta.url).href,
    },
  },
};

export { coordinates, apiKey, BASE_URL, weatherConditionImages };
