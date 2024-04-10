import React from 'react';
import './Team.css';
import profile from './images/akshat.jpg';
import pfp from './images/profile-placeholder.jpg';
import AkamProfile from './images/Akam_1.jpg';
import NelsonProfile from './images/Nelson.jpg';
import JacobProfile from './images/Jacob.jpg';


export default function Team() {
  return (
    <>
      <div className='content'>
        <div class="team-row-title">
          <h1>OUR TEAM</h1>
        </div>
        <div className="row">

          <div className="column">
            <a href="https://www.linkedin.com/in/gurakampabla/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={AkamProfile} />
                </div>
                <h3>Akam Pabla</h3>
                <p>Co-President</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/jacob-gomes-075b5619b/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={JacobProfile} />
                </div>
                <h3>Jacob Gomes</h3>
                <p>Co-President</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/nelson-li-51509a218/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={NelsonProfile} />
                </div>
                <h3>Nelson Li</h3>
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