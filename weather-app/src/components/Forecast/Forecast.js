import React from 'react';

const Forecast = () => {

    // function with fetch
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Madrid&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
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
       </div>
    )
}

 export default Forecast;