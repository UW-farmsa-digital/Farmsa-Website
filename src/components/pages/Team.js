import React from 'react';
import './Team.css';
import profile from './images/akshat.jpg';
import pfp from './images/profile-placeholder.jpg';
import ChuhanProfile from './images/Chuhan.png';
import AgamDeepProfile from './images/Agamdeep.png';



export default function Team() {
  return (
    <>
      <div className='content'>
        <div class="team-row-title">
          <h1>OUR TEAM</h1>
        </div>
        <div className="row">

          <div className="column">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={ChuhanProfile} />
                </div>
                <h3>Chuhan Huang</h3>
                <p>Co-President</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/agamdeep-singh-kalra" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={AgamDeepProfile} />
                </div>
                <h3>Agamdeep Singh</h3>
                <p>Co-President</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
