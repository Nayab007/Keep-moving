import React from 'react';

import './DisruptionInfo.css';

import Signal from './Signal.png'; 
import Weather from './Weather.png';


 export function DisruptionInfo () {
  return (
    <div className="DisruptionInfo">

        <h3>Disruption on Railway Track </h3>
        
            <div>
                <img src={Signal} alt=""/>
                <h5>Railway Lines:</h5>
                <p>Lund centrum </p>
                
                <h5>Notice:</h5>
                <p>Between Lund and Malmo there is no train running due to signal fail.</p>
        
                <h5>Last update:Today at 14:00</h5>
                <p>This disruption started today at 11:05</p>
            </div>
             

            <div>
            <img src={Weather} alt=""/>
        
            <h5>Railway Lines:</h5>
                <p>Mjolby-Alvests </p>
                
                <h5>Notice:</h5>
                <p>There has been extreme snow fall because of which fewer train are running </p>
        
                <h5>Last update:Today at 15:60</h5>
                <p>This  started yesterday at 13:05</p>
            </div>
           
       
                   
    </div>
  );
}

export default DisruptionInfo;