import React, { useState } from 'react';
import Conditions from "../Conditions/Conditions";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('metric');


  const uriEncodedCity = encodeURIComponent(city);

  // function with fetch
  function getForecast() {
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
      <div>
          {JSON.stringify(responseObj)}
     </div>
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions
        responseObj={responseObj}
      />
    </div>
  );
};

export default Forecast;
