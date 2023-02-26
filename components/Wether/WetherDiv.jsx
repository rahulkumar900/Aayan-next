import React, { useState, useEffect } from "react";
import Image from "next/image"
export default function Weather () {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState({});

  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${-8.65818721473174}&lon=${115.15177235328058}&units=metric&APPID=bb93415a7f435bc3d274c7ef8266373c`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="p-4 inline-flex items-center ">
      {data && typeof data.main != "undefined" ? (
        <div className=" flex items-center flex-col">
          <div className="text-normal text-purple font-medium">
            {data.main.temp}
            <span>&#8451;</span>
          </div>
          <div className="z-30">
            <Image
              className="w-20 h-20 "
              alt='weaher'
              width={50}
              height={50}
              src={`https://openweathermap.org/img/wn/${data.weather[0]["icon"]}.png`}
            />
          </div>

          <div className="text-center text-sm  text-purple">
            {data.weather[0].description}
          </div>
          <div className="text-sm font-medium text-center uppercase text-purple">Bali</div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
