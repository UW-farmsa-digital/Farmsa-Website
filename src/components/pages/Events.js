import React from 'react';
import './Events.css';
import critique from './images/resumeCritique.webp';
import bot from './images/bot.webp';
import s24infoSes from './images/20240626-ScotiaInfoSes.png';
import s24intWrk3 from './images/20240531-IntWork3.png';
import s24intWrk2 from './images/20240528-IntWork2.png';
import s24intWrk1 from './images/20240524-IntWork1.png';
import s24resMix from './images/20240510-ResumeMixer.png';

export default function Events() {
  return (
    <>
      <div className='events-content'>
        <div className="events-row-title">
          <h1>EVENTS</h1>
        </div>
        <div className="events-row">
          <h2>Upcoming Events</h2>
        </div>
        <div className="events-row">
          <h3>Stay Informed About Our Events by Following Us on Social Media!</h3>
        </div>

        <div className="events-row">
          <h2>Previous Events</h2>
        </div>

        <div className="events-row">
          <div className="events-column">
            <div className="events-card">
              <div className="events-img-container">
                <img src={s24infoSes} />
              </div>
              <div className="text">
                <h3>Scotiabank S&T Info Session</h3>
                <h4>Scotiabank Sales and Trading Information Session with traders and campus recruiters</h4>
                <h4>Learn about the recruiting process, get insights into traders‘ day-to-day life, and seize the opportunity to network.</h4>
              </div>
            </div>
          </div>
        </div>
        
        <div className="events-row">
          <div className="events-column">
            <div className="events-card">
              <div className="events-img-container">
                <img src={s24intWrk3} />
              </div>
              <div className="text">
                <h3>Interview Workshop - Intro to IB</h3>
                <h4>Join us for the 3rd session in FARMSA’s series of interview workshops.</h4>
                <h4>This workshop on Investment Banking aims to equip you with the essential skills to succeed in technical interviews.</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="events-row">
          <div className="events-column">
            <div className="events-card">
              <div className="events-img-container">
                <img src={s24intWrk2} />
              </div>
              <div className="text">
                <h3>Interview Workshop - Sales & Trading</h3>
                <h4>Join us for our 2nd Interview Workshop! We covered how to answer technical SnT/Quant questions properly to present yourself as the best fit for the team.</h4>
                <h4>Get to know what interviewers are looking for and learn how to showcase your technical skills.</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="events-row">
          <div className="events-column">
            <div className="events-card">
              <div className="events-img-container">
                <img src={s24intWrk1} />
              </div>
              <div className="text">
                <h3>Interview Workshop - Behavioural Questions & Networking</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="events-row">
          <div className="events-column">
            <div className="events-card">
              <div className="events-img-container">
                <img src={s24resMix} />
              </div>
              <div className="text">
                <h3>Resume Workshop & Mixer</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="events-row">
          <div className="events-column">
            <div className="events-card">
              <div className="events-img-container">
                <img src={bot} />
              </div>
              <div className="text">
                <h3>BOT Networking</h3>
                <h4>Are you looking to make connections with like-minded people and meet the FARMSA team? Join UW FARMSA for our Beginning Of Term Networking Event on Thursday, January 19th from 6-7pm at STC 0020!</h4>
                <h4>This is a great opportunity to network with the team and other students who share an interest in finance.</h4>
                <h4>Students of all programs and years are welcome!</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
