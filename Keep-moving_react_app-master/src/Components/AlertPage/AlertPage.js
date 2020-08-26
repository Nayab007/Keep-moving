

import React from 'react';

import './AlertPage.css';
import FormB from "./FormB";


export class AlertPage extends React.Component {
  state = {
    error: undefined,
    trips: []
    //leg: []
  };
  getTrip = async e => {
    e.preventDefault();
    const originId = e.target.elements.originId.value;
    const destId = e.target.elements.destId.value;
    const date = e.target.elements.date.value;
    const time = e.target.elements.time.value;

    const apicall = await fetch(
      `https://api.resrobot.se/v2/trip?key=4cdf104f-5283-460e-b88a-9c719aa18696&originId=${originId}&destId=${destId}&${originId}&date=${date}&time=${time}&numF=1&passlist=0&lang=en&format=json`
    );
    if (originId && destId && date && time && originId !== destId) {
      const data = await apicall.json();
      console.log(data);
      this.setState({
        trips: data.Trip
        //leg: data.Trip.Leglist.
      });
    } else {
      this.setState({
        trips: [],
        error: "Please select the different cities or select cities"
      });
    }
    console.log(this.state.error);
    console.log(this.state.trips);
  };

  render() {
    return (
      <div className="AlertPage">
        <div className="AlertHeading">
          <h3>Alert Me </h3>
          <h4> "Your Journey, Your Way"</h4>
        </div>

        <div className="Alertbody">
          <div>
            <p>My Booking</p>
            <div className="Box1">
              <div><FormB getTrip={this.getTrip} /></div>
              </div>
          </div>

          <div>
            <p>Alert Departure and Delays</p>
            <div className="Box2">
              <p>
                {" "}
                <select>
                  {" "}
                  <option>10 Min</option>
                  <option>20 Min </option>
                  <option>30 Min</option>
                </select>
              </p>
            </div>
          </div>

          <div>
            <p>Setup Alert </p>

            <div className="Box3">
              <p>
                Between{" "}
                <select>
                  <option>30 min </option>
                  <option>60 Min</option>
                  <option>90 min </option>
                  <option>120 Min</option>
                </select>{" "}
                to{" "}
                <select>
                  <option>60 min </option>
                  <option>90 Min</option>
                  <option>90 min </option>
                  <option>120 Min</option>
                </select>{" "}
                before departure
              </p>
            </div>
          </div>
          <hr />
          {this.state.trips.map(trip =>
            trip.LegList.Leg.map(tripDet => (
              <div>
                <br />
                <ul>
                  <li key={tripDet.id} className="OneTrip">
                    <h2>{tripDet.Origin.name}</h2>
                    {tripDet.Origin.date}/{tripDet.Origin.time}
                    <h2>{tripDet.Destination.name}</h2>
                    {tripDet.Destination.date}/{tripDet.Destination.time}
                    <div>
                      <p>Alert message</p>
                      <div className="Box4">
                        <p>
                          {tripDet.reachable
                            ? "There is no disrubtion"
                            : "There is some disrubtion on your trip"}{" "}
                        </p>{" "}
                      </div>
                    </div>
                    <hr />
                  </li>

                  <p>Time:{(trip.duration).slice(2)}</p>
                </ul>
              </div>
            ))
          )}

          <h2>{this.state.error}</h2>
        </div>
      </div>
    );
  }
}

export default AlertPage;


