import React from 'react';

const Conditions = (props) => {
    //if response code is 200, then return city, temp and weather. If not, return null
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;