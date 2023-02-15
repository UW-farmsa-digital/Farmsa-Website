import React from 'react';
import './AboutUs.css';
import profile from './images/goals.jpg';

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
      </div>
    </>
  );
}