import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import BufferPage from './Components/BufferPage/BufferPage';
import WellcomePage from './Components/WellcomePage/WellcomePage';
import AlertPage from './Components/AlertPage/AlertPage';
import JourneyInfo from './Components/JourneyInfo/JourneyInfo';

import Clear from './Components/JourneyInfo/Clear';

import Disruption from './Components/JourneyInfo/Disruption';
import Footer from './Components/Footer/Footer';
//import RoutesInfo from './Components/RoutesInfo';



import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
   
    <BrowserRouter>
    <div className="App">
       <Header />

       <Switch>
              <Route path="/" component={BufferPage} exact/>
              <Route path="/JourneyInfo" component={JourneyInfo}/>
              <Route path="/Disruption" component={Disruption}/>
              <Route path="/Clear" component={Clear}/>
              <Route path="/AlertPage"component={AlertPage}/>
              <Route path="/WellcomePage" component={WellcomePage}/>
      </Switch>
         <Footer />
          
    </div>
    </BrowserRouter>
  );
}


export default App;
