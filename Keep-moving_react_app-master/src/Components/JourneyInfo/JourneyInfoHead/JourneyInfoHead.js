import React from 'react';
import './JourneyInfoHead.css';

import { NavLink } from 'react-router-dom';


export function JourneyInfoHead() {
  
  return (
    <div className="JourneyInfoHead">
          
          <h3>JOURNEY</h3>

          <div className="JourneyDis">
          <NavLink to="/JourneyInfo"><h5 style={{color: 'white',  textDecoration:'none'}}>ROUTES</h5></NavLink> 
          <NavLink to="/Disruption"><h5 style={{color: 'white'}}>DISRUPTION</h5></NavLink> 
          </div>
          
    </div>
  );
}

export default JourneyInfoHead;