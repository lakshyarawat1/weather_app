import { useEffect, useState } from "react";
import { BsCloudDrizzle } from "react-icons/bs";

const RightComponent = () => {
  
  const [ time, setTime ] = useState('')

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0')

    const time = `${formattedHours}:${formattedMinutes}`
    setTime(time)
    },[]);
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 w-1/3 h-[100vh] p-10">
        <div className="flex gap-48">
          <div className="flex flex-col">
            <div className="text-lg text-white">Dwarka</div>
            <div className="text-xs text-slate-200">Delhi, India</div>
          </div>
          <div className="text-white font-bold text-xl">{time}</div>
        </div>
        <div className="my-10">
          <BsCloudDrizzle className="text-3xl text-white" />
          <div className="flex gap-40">
            <div className="text-white text-4xl font-semibold mt-10">20° C</div>
            <div className="mt-10 text-white text-sm w-1/4">Dramatic Cloudy</div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="text-white my-10 text-lg">
            Air Quality Index
          </div>
          <div className="text-4xl font-bold text-white ">
            95%
          </div>
          <div className=" bottom-1 absolute text-sm text-white right-4">
            @copyright 2023 lakshyarawat1
          </div>
        </div>
      </div>
    </>
  );
}

export default RightComponent