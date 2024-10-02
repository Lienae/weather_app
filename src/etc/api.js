import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "5bb4f17b9abe3688a33a27272c989cd7";

//#region 01. 온도 계산 API
const searchWeather = async (location) => {
  try {
    const data = await axios({
      method: "GET",
      url: BASE_URL + "/weather",
      params: {
        appid: API_KEY,
        q: location,
        units: "metric",
      },
    });
    return data;
  } catch (err) {
    alert(err);
    return {};
  }
};
//#endregion

export { searchWeather };

