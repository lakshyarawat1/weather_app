import axios from "axios";

const serverURL = "http://localhost:3000/weather";

export const getWeatherData = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(serverURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
