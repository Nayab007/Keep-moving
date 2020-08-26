import React from 'react';
import {JourneyInfoHead} from './JourneyInfoHead/JourneyInfoHead';
import {RoutesInfo} from './RoutesInfo/RoutesInfo';


 function JourneyInfo () {
  return (
    <div className="JourneyInfo">

      <JourneyInfoHead />

      <RoutesInfo />    
    </div>
  );
}

export default JourneyInfo;