import React from 'react';
import './Home.css';
import farmsaLogo from './images/farmsaLogo.png';
import background from './images/background.jpg';


export default function Home() {
  return (
    <>
      <div className='home' >
        
        <div className='content'>
          <img src={farmsaLogo} alt="BigCo Inc. logo"/>
          <h1 className='title'>Financial Analysis and Risk Management Student Association</h1>
        </div>
      </div>
    </>
  );
}