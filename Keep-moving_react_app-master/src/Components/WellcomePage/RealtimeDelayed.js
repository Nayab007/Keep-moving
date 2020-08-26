import React from "react";
import './RealtimeDelayed.css';


  export class RealtimeDelayed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        disruptions: []
      };
    }
  
    componentDidMount() {
     fetch ("https://cors-anywhere.herokuapp.com/https://labs.thetrainbrain.com/knockon/?minutes=60")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              disruptions: result.disruptions
            });
          },
          
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          
        )

    }
  
    render() {
      const { error, isLoaded, disruptions } = this.state;
      if (error) {
        return <p>Error: {error.message}</p>;
      } else if (!isLoaded) {
        return <p>Loading...</p>;
      } else {
        return (
          <ul className='RealtimeDelayed'>
             <div><h3> Notice of Train Delayed in last hour</h3></div> 
              <hr/>
            {disruptions.map(index => (
              <li key={index.id} className='Hover'>
          <a href="##">{index.station.station}</a>,
               {`      `} {index.delaycount} {`Time/s`}
               <hr/>
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default RealtimeDelayed;


