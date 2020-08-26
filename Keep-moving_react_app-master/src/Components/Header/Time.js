import React from 'react';


export class Time extends React.Component {


        constructor(props) {
          super(props)
          const d = new Date()
            this.state = {
               time: d.toLocaleTimeString()
            }
          this.countingSecond = this.countingSecond.bind(this)
        }

        countingSecond() {
          let d = new Date()
          this.setState({

            time: d.toLocaleTimeString()
          })
        }
        componentWillMount() {
          setInterval(this.countingSecond, 1000)
        }
        render() {
          
        return (
            <div>
        <p style={{color:'#1ABC9C', width:'25px'}}> {this.state.time}</p>
            </div>
          )
        }
      }
      export default Time;

      /*
           
           
           function getTime(){
             return(new Date()).toLocaleTimeString()
           }
           
           function App () {
                   return ( 
           
                   <div>{getTime()}</div>
           
                   );
               }
           
           export default App;

        */
      

