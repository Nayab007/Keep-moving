import React from "react";
//import Title from './components/Title';
import Form from "./Form";
//import Trips from './components/Trips';
import './RoutesInfo.css';

import Signal1 from './Signal1.png'; 
import SignalG from './SignalG.png';

export class RoutesInfo extends React.Component {
  state = {
    error: undefined,
    trips: []
    //leg: []
  };
  getTrip = async e => {
    e.preventDefault();
    const originId = e.target.elements.originId.value;
    const destId = e.target.elements.destId.value;
    console.log(originId);
    console.log(destId);

    const apicall = await fetch(
      `https://api.resrobot.se/v2/trip?key=4cdf104f-5283-460e-b88a-9c719aa18696&originId=${originId}&destId=${destId}&Products=speedtrain&lang=en&format=json`
    );
    if (originId && destId && originId !== destId) {
      const data = await apicall.json();
      console.log(data);
      this.setState({
        trips: data.Trip,
        //leg: data.Trip.Leglist.

      });
    }
    else {
      this.setState({

        trips: [],
        error: 'Please select the different Cities'
      });
    }
    console.log(this.state.error)
    console.log(this.state.trips);
  };
  render() {
    return (
      <div className="RoutesInfo">
        <div className="App-header">
          <h2>Trip Search</h2>
          <Form getTrip={this.getTrip} />
          <hr/>
        </div>

          {this.state.trips.map(trip =>
          trip.LegList.Leg.map(tripDet => (
           <div>
                 <li key={tripDet.id}></li>
               <ul className='RoutesDisplay' >
               <li>
                <h4>From:</h4>
                     <li>{tripDet.Origin.name}</li>
                     <li>{tripDet.Origin.date}</li>
                     <li>{tripDet.Origin.time}</li>
                </li>
                 <li>
                 <h4>To:</h4>
                     <li>{tripDet.Destination.name}</li>
                     <li>{tripDet.Destination.date}</li>
                     <li>{tripDet.Destination.time}</li>
                </li>

               </ul>

               <ul className='TimeDisplay'>
               <li>
                 Time:
                        <li className="Circle" style={{fontSize:'12px'}}>{(trip.duration).slice(2)}</li>
                </li>

               <li>
                 Delay:
                     <li>{tripDet.reachable 
                         ?(<span><img src={SignalG} alt=""/>No</span>)
                         :<span style={{color:'red'}}><img width="48" height="48" src={Signal1} alt=""/>Yes</span>}
                     </li>
                 </li>  
               </ul>
               <hr/>
              </div>
              
          ))
        )}
         <h2 style={{color:'red', marginLeft:'40%'}}>{this.state.error}</h2>
      </div>
    );
  }
}

export default RoutesInfo;
