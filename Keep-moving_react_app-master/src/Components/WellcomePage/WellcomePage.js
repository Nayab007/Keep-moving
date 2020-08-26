
import React, { Component } from 'react';
import Map from './Map';
import RealtimeDelayed from './RealtimeDelayed';
import './WellcomePage.css'



class WellcomePage extends Component {

	render() {
		return(
			<div className="WellcomePage">
             <div>
				 <RealtimeDelayed />
			 </div>

			<div style= {{
				           height:'70vh',
                           width:'72vw',
						   border:'1px solid #ccc',
                           backgroundColor: 'rgba(215, 255, 231, 0.9)'}}>
				<Map
					google={this.props.google}
					center={{lat: 59.301490, lng: 18.090500}}
					  height='70vh'
					zoom={15}
				/>
			</div>
		</div>
	
		);
	}
}

export default WellcomePage;

