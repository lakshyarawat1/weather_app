/* eslint-disable react/no-unescaped-entities */

import { BsWind, BsCloudRain, BsSun } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { CiWavePulse1 } from "react-icons/ci";
import HomeChart from "../charts/homeChart";
import { getWeatherData } from "../api/weatherAPI";
import { useState, useEffect } from "react";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    getWeatherData()
      .then((response) => {
        setWeatherData(response);
        console.log(weatherData);
      })
      .catch((err) => console.log(err));
  }, [weatherData]);

  return (
    <>
      <div className="bg-white w-1/2">
        <div className="flex flex-row gap-10 m-10">
          <div className="font-bold text-2xl">{today}</div>
          <input
            type="text"
            className="text-sm bg-slate-50 rounded-xl border"
            placeholder="      Search"
          />
          <div className="text-slate-400 flex gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <hr />
        <div className="p-5">
          <div className="flex gap-72">
            <div className="font-semibold text-xl">Today's overview</div>
            <div className="text-blue-600 font-semibold flex gap-5">
              More details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="w-1/2 bg-slate-100 p-5 rounded-xl m-2 ">
              <div className="flex gap-5">
                <div className="text-blue-600 text-3xl font-bold">
                  <BsWind />
                </div>
                <div className="text-slate-500 text-xs">Wind speed</div>
              </div>
              <div className="flex gap-6">
                <div className="text-xl font-bold ml-10">{ weatherData.weatherData.current.gust_kph } km/h</div>
                <div className="flex gap-2">
                  <div className="text-xl text-red-500 animate-bounce">
                    <AiFillCaretDown />
                  </div>
                  <div className="text-xs text-slate-400">-2.2 km/h</div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-slate-100 p-5 rounded-xl m-2 ">
              <div className="flex gap-5">
                <div className="text-blue-600 text-3xl font-bold">
                  <BsCloudRain />
                </div>
                <div className="text-slate-500 text-xs">Pressure</div>
              </div>
              <div className="flex gap-6">
                <div className="text-xl font-bold ml-10">{ weatherData.weatherData.current.pressure_mb } hpa</div>
                <div className="flex gap-2">
                  <div className="text-xl text-green-500 animate-bounce">
                    <AiFillCaretUp />
                  </div>
                  <div className="text-xs text-slate-400">+32 hpa</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 bg-slate-100 p-5 rounded-xl m-2 ">
              <div className="flex gap-5">
                <div className="text-blue-600 text-3xl font-bold">
                  <CiWavePulse1 />
                </div>
                <div className="text-slate-500 text-xs">Rain Chance</div>
              </div>
              <div className="flex gap-16">
                <div className="text-xl font-bold ml-10">94%</div>
                <div className="flex gap-2">
                  <div className="text-xl text-green-500 animate-bounce">
                    <AiFillCaretUp />
                  </div>
                  <div className="text-xs text-slate-400">+2.0%</div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-slate-100 p-5 rounded-xl m-2 ">
              <div className="flex gap-5">
                <div className="text-blue-600 text-3xl font-bold">
                  <BsSun />
                </div>
                <div className="text-slate-500 text-xs">UV Index</div>
              </div>
              <div className="flex gap-16">
                <div className="text-xl font-bold ml-10">
                  {weatherData.weatherData.current.uv}
                </div>
                <div className="flex gap-2">
                  <div className="text-xl text-red-500 animate-bounce">
                    <AiFillCaretDown />
                  </div>
                  <div className="text-xs text-slate-400">-5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeChart />
      </div>
    </>
  );
};

export default Dashboard;
