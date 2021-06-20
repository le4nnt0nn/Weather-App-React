import React, { useState } from "react";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  // function with fetch
  function getForecast() {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=madrid&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "5d42d2897emsh6345ce50d7b7adcp1ca28cjsnee0a752867ba",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      // response to jsonObject
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    // brackets allows mix JavaScript with HTML
    <div>
      <h2>Find Current Weather Conditions Right Now</h2>
      <div>{JSON.stringify(responseObj)}</div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
};

export default Forecast;
