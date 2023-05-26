const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
const weatherConditions = ["Clear", "Cloudy", "Rainy", "Snowy"];

export const data = [];

cities.forEach((city) => {
  const temperature = getRandomNumber(-10, 40);
  const pressure = getRandomNumber(500, 900); // Temperature range: -10°C to 40°C
  const condition =
    weatherConditions[getRandomNumber(0, weatherConditions.length)];
  var time = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
  const weatherData = {
    city: city,
    temperature: temperature,
    condition: condition,
    pressure: pressure,
    time: time,
  };

  data.push(weatherData);
});

// Helper function to generate random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
