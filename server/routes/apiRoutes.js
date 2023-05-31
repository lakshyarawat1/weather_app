import express from "express";
import { getWeatherData } from "../services/weatherAPI.js";

const router = express.Router();

router.get('/status', (req, res) => {
    res.send(200)
    console.log('OK')

})

router.get('/weather', async (req, res) => {
    const response = await getWeatherData();
    res.send({ weatherData : response })
})


export default router;