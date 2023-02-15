import React from 'react';
import './Events.css';
import critique from './images/resumeCritique.webp';
import bot from './images/bot.webp';

export default function Events() {
  return (
    <>
      <div className='events-content'>
        <div class="events-row-title">
          <h1>EVENTS</h1>
        </div>
        <div class="events-row">
          <h2>Upcoming Events</h2>
        </div>
        <div class="events-row">
          <div class="events-column">
            <div class="events-card">
              <div class="events-img-container">
                <img src={critique} />
              </div>
              <div class="text">
                <h3>Resume Critique</h3>
                <h4>UW FARMSA will be hosting a Resume Critique and Mock Interview event! Sign-up and get your resume's critiqued by representatives from various industries like Technology, Finance, Accounting et area. And, participate in mock interviews!</h4>
                <h4>9th February at STC 0020from 6:30 pm to 7:30 pm</h4>
                <h4>Students of all programs and years are welcome!</h4>
                <div className='register'>
                  <a href="https://docs.google.com/forms/d/1is23Ss_rAQAgkp6gFFxtmx2y81yebPAY4b-aqEwe0-4/viewform?edit_requested=true"> Register </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="events-row">
          <h2>Previous Events</h2>
        </div>
        <div class="events-row">
          <div class="events-column">
            <div class="events-card">
              <div class="events-img-container">
                <img src={bot} />
              </div>
              <div class="text">
                <h3>BOT Networking</h3>
                <h4>Are you looking to make connections with like-minded people and meet the FARMSA team? Join UW FARMSA for our Beginning Of Term Networking Event on Thursday, January 19th from 6-7pm at STC 0020!</h4>
                <h4>This is a great opportunity to network with the team and other students who share an interest in finance.</h4>
                <h4>Students of all programs and years are welcome!</h4>
                <div className='register'>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6EEoqjtuO4ztU2lWyKtuzUgDWHNNxO7oxsgn1lFD_uY71Vw/viewform"> Register </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}