import axios from 'axios'

export const getWeatherData = async () => {
    try {
        const apiKey = process.env.weatherAPI;
        const city = 'del';

        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        return weatherData;
    } catch (err) {
        console.log(err.message)
    }
}