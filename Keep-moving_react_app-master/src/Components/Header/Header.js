import React from 'react';

import './Header.css';
import home from './home.png'; 
import Time from './Time'

import { NavLink } from "react-router-dom";



//setInterval(function(){ location.reload(); }, 3000);

function Header() {

  return (
    <div className="Header">
      <NavLink to="/"><img src={home} alt=""/></NavLink>
      <Time />
          
    </div>
  );
}
  

export default Header;




