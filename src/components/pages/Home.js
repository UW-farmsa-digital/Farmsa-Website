import React from 'react';
import './Home.css';
import farmsaLogo from './images/farmsaLogo.png';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import background from './images/background.jpg';


export default function Home() {
  return (
    <>
        <div className='content'>
          <div className='backImage'>
            <h1>Financial Analysis and Risk Management Student Association</h1>
          </div>        
          <div className='socials'>
            <SocialIcon classname='icons' url="https://www.facebook.com/UWFARMSA/" network="facebook" style={{ margin: 5}} />
            <SocialIcon classname='icons' url="https://www.instagram.com/uw.farmsa/" network="instagram" style={{ margin: 5}}/>
            <SocialIcon classname='icons' url="https://discord.com/" network="discord" style={{ margin: 5}}/>
            <SocialIcon classname='icons' url="https://twitter.com/uwfarmsa?lang=en" network="twitter" style={{ margin: 5}}/>
            <SocialIcon classname='icons' url="https://www.linkedin.com/company/uwfarmsa/" network="linkedin" style={{ margin: 5}}/>
          </div>
        </div>
    </>
  );
}