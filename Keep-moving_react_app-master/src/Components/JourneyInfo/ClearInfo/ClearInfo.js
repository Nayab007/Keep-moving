import React from 'react';
import './ClearInfo.css';
import SignalG from './SignalG.png'; 
import WeatherG from './WeatherG.png';


 export function ClearInfo () {
  return (
    <div className="ClearInfo">

        <h3>No Disrubtion</h3>
            <div>
                <img src={SignalG} alt="" />
                <h5>Railway Tracks:</h5>
                <p>Stockholm-Gotenberg</p>
                
                <h5>Notice:</h5>
                <p>Between Stockholm to Gotenberg there is no any disruption in train line</p>
        
                <h5>Last update:Today at 14:00</h5>
                <p>These is no any signal fail</p>
            </div>
             

            <div>
            <img src={WeatherG} alt=""/>
        
            <h5>Railway Tracks:</h5>
                <p>Stockholm-Gotenberg </p>
                
                <h5>Notice:</h5>
                <p>These is snow fall in this line, but till now no disruption </p>
        
                <h5>Last update:Today at 15:60</h5>
                <p>Yesterday, Train were late because of snow fall</p>
            </div>
           
       
                   
    </div>
  );
}

export default ClearInfo;