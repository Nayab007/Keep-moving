import React from 'react';
import './Footer.css';

import Code from './Code.png';
import Journey from './Journey.png';
import Notification from './Notification.png';
import UserLocation from './UserLocation.png';

import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <div className="Footer">
      <NavLink to="/JourneyInfo"><img src={Journey} alt="" /></NavLink>
      <NavLink to="/AlertPage"><img src={Code} alt="" /></NavLink>
      <NavLink to="/AlertPage"><img src={Notification} alt="" /></NavLink>
      <NavLink to="/WellComePage"><img src={UserLocation} alt="" /></NavLink>





    </div>
  );
}

export default Footer;