import React from 'react';
import './Events.css';
import profile from './images/resumeCritique.webp';

export default function Events() {
  return (
    <>
      <div className='events-content'>
        <div class="events-row">
          <h1>Events</h1>
        </div>
        <div class="events-row">
          <div class="events-column">
            <div class="events-card">
              <div class="events-img-container">
                <img src={profile} />
              </div>
              <div class="text">
                <h2>Resume Critique</h2>
                <h3>UW FARMSA will be hosting a Resume Critique and Mock Interview event! Sign-up and get your resume's critiqued by representatives from various industries like Technology, Finance, Accounting et area. And, participate in mock interviews!</h3>
                <h3>9th February at STC 0020from 6:30 pm to 7:30 pm</h3>
                <h3>Students of all programs and years are welcome!</h3>
                <h3>Register link: https://docs.google.com/forms/d/1is23Ss_rAQAgkp6gFFxtmx2y81yebPAY4b-aqEwe0-4/viewform?edit_requested=true</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}