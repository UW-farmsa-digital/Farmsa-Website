import React from 'react';
import './AboutUs.css';
import event1 from './images/event1.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.jpg';
import event4 from './images/event4.jpg';

export default function AboutUs() {
  return (
    <>
      <div className='content'>
        <div class="about-row-title">
          <h1>ABOUT US</h1>
        </div>
        <div class="about-row">
          <h2>About Us</h2>
        </div>
        <div class="about-row">
          <p>University of Waterloo Financial Analysis and Risk Management Student Association is a non-profit student club open to all Math students at the UW, even those not in the Math/FARM program. Our purpose is to provide interested students with the knowledge, tools, and networks needed to attain their professional designations (CFA, CFP, PRM, CSC, etc.) in the Financial Services industry.</p>
        </div>
        <div class="about-row">
          <h2>Our Goals</h2>
        </div>
        <div class="about-row">
          <ol>
            <li>To encourage academic pursuits and interests of the Math/FARM program internally and externally.</li>
            <li>To provide services that will benefit Math/FARM students and other interested individuals academically and professionally.</li>
            <li>To improve the cohesiveness between individuals of the Math/FARM program.</li>
            <li>Provide a framework to build, improve and promote the reputation and quality of the Math/FARM program.</li>
          </ol>
        </div>
        <div class="about-row">
          <h2>Our Services</h2>
        </div>
        <div class="about-row">
          <ol>
            <li><b>Social Events:</b> Recruitment Events, End of Term Social, General Meetings, Networking Receptions</li>
            <li><b>Office Hour Consulting:</b> Executive members are available during their office hours to talk about course selection, and to hear your suggestions or concerns on the progress of the program or the association.</li>
            <li><b>Speaker Sessions:</b> CFA and PRM speakers are invited to talk about their experiences as a CFA or PRM.</li>
            <li><b>Study Resources:</b> Study materials for the CFA examination as well as monthly Financial Posts are available in the office.</li>
          </ol>
        </div>
        <div class="about-row">
          <h2>Events Benefits</h2>
        </div>
        <div class="about-row">
          <p>UW FARMSA offers a variety of tutorials and employer information sessions, for students looking to obtain professional designations or seeking a career in financial analysis and risk management. We also provide numerous social events to help students build networks within the FARM community.</p>
          <div className='events-page'>
            <a href='#/events'>Learn More</a>
          </div>
        </div>
        <div class="about-row">
          <div className='events-img'>
            <img src={event1}/>
            <img src={event2}/>
            <img src={event3}/>
            <img src={event4}/>
          </div>
        </div>
      </div>
    </>
  );
}