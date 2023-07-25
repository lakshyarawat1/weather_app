import { useState } from "react";
import Dashboard from "./components/Dashboard";
import RightComponent from "./components/RightComponent";
import SideBar from "./components/SideBar";
import { getWeatherData } from "./api/weatherAPI";

function App() {
  const [weatherData, setWeatherData] = useState();
  try {
    setInterval(async () => {
      const res = getWeatherData();
      // setWeatherData(res.weatherData);
      console.log(res)
    }, 3000);
  } catch (err) {
    console.log(err);
  }
  console.log(weatherData)
  return (
    <>
      <div className="flex">
        <SideBar />
        <Dashboard weatherData={weatherData} />
        <RightComponent weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
