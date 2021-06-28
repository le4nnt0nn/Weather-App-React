import React, { useState } from 'react';
import Conditions from "../Conditions/Conditions";
import classes from "./Forecast.module.css";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('metric');

  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);


  const uriEncodedCity = encodeURIComponent(city);

  // function with fetch
  function getForecast(e) {

    // avoids lose data
    e.preventDefault();

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5d42d2897emsh6345ce50d7b7adcp1ca28cjsnee0a752867ba",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	  }
  })
  .then(response => response.json())
  .then(response => {
    setResponseObj(response)
  })
  .catch(err => {
	  console.error(err);
  });
}
  return (
    // brackets allows mix JavaScript with HTML
    <div>
      <h2>Find Current Weather Conditions Right Now</h2>
     <form onSubmit={getForecast}>
        <input
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={classes.textInput}
          />
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "imperial"}
              value="imperial"
              onChange={(e) => setUnit(e.target.value)}
              className={classes.radioInput}
            />
              Fahrenheit
          </label>
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
              className={classes.radioInput}
              />
            Celcius
          </label>
              <button className={classes.buttonInput} type="submit">Get Forecast</button>
            </form>
      <Conditions
        responseObj={responseObj}
      />
    </div>
  );
};

export default Forecast;
