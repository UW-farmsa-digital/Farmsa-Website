import React from 'react';
import './Home.css';
import farmsaLogo from './images/farmsaLogo.png';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import background from './images/background.jpg';


export default function Home() {
  return (
    <>
      <div className='home' >
        
        <div className='content'>
          <img src={farmsaLogo} alt="BigCo Inc. logo"/>
          <h1 className='title'>Financial Analysis and Risk Management Student Association</h1>
          <div className='socials'>
            <SocialIcon classname='icons' url="https://www.facebook.com/UWFARMSA/" network="facebook" style={{ margin: 5}} />
            <SocialIcon classname='icons' url="www.google.com" network="instagram" style={{ margin: 5}}/>
            <SocialIcon classname='icons' url="www.google.com" network="discord" style={{ margin: 5}}/>
            <SocialIcon classname='icons' url="https://twitter.com/uwfarmsa?lang=en" network="twitter" style={{ margin: 5}}/>
            <SocialIcon classname='icons' url="https://www.linkedin.com/company/uwfarmsa/" network="linkedin" style={{ margin: 5}}/>
          </div>
        </div>
      </div>
    </>
  );
}