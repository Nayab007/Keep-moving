
import React from 'react';

import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getTrip} >
       <div className='Form'>
       <span className='select'> From:
         <select name='originId' id='originId'>
          <option value=''>--Please choose a city--</option>
          <option value='740000001'>Stockholm </option>
          <option value='740000002'>Göteborg</option>
          <option value='740000072'>Enköping </option>
          <option value='740000099'>Västerås</option>
          <option value='740000167'>Köping </option>
          <option value='740000133'>Örebro</option>
          <option value='740000077'>Hallsberg </option>
          <option value='740000008'>Skövde</option>
          <option value='740000018'>Alingsås  </option>
          <option value='740000003'>Malmö</option>
          <option value='740000120'>Lund</option>
          <option value='740000080'>Halmstad </option>
          <option value='740000009'>Linköping</option>
          <option value='740000166'>Katrineholm</option>
          <option value='740000007'>Norrköping</option>
          <option value='740001545'>Kolmården </option>
          <option value='740000616'>Mantorp</option>
          <option value='740000020'>Kalmar</option>
          <option value='740000250'>Växjö</option>
          <option value='740000556'>Arlanda</option>
        </select>
        </span>
        
        <span className='select'> To:
          <select name='destId' id='destId' className='destId'>
          <option value=''>--Please choose a city--</option>
          <option value='740000001'>Stockholm </option>
          <option value='740000002'>Göteborg</option>
          <option value='740000072'>Enköping </option>
          <option value='740000099'>Västerås</option>
          <option value='740000167'>Köping </option>
          <option value='740000133'>Örebro</option>
          <option value='740000077'>Hallsberg </option>
          <option value='740000008'>Skövde</option>
          <option value='740000018'>Alingsås  </option>
          <option value='740000003'>Malmö</option>
          <option value='740000120'>Lund</option>
          <option value='740000080'>Halmstad </option>
          <option value='740000009'>Linköping</option>
          <option value='740000166'>Katrineholm</option>
          <option value='740000007'>Norrköping</option>
          <option value='740001545'>Kolmården </option>
          <option value='740000616'>Mantorp</option>
          <option value='740000020'>Kalmar</option>
          <option value='740000250'>Växjö</option>
          <option value='740000556'>Arlanda</option>
        </select>

        </span>

        </div>
        <button className="fill-button">
          <span class="fill-button-hover">      
          <span class="fill-button-text">Get Trip</span>
          </span>
        </button>
      </form>
  
    );
  }
}
export default Form;
