import React from 'react';

import './BufferPage.css';

import Train from './Train.png'

function BufferPage() {
  return (
    <div className="BufferPage">
      <div>
           <h1>Keep Moving</h1>
           
           <img src={Train} alt="" width={300} height={300} mode='fit' />

      </div>
   
    </div>
  );
}

export default BufferPage;


