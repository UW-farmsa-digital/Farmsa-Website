import React from 'react';
import './Team.css';
import profile from './images/akshat.jpg';
import pfp from './images/profile-placeholder.jpg';

export default function Team() {
  return (
    <>
      <div className='content'>
        <div class="team-row-title">
          <h1>OUR TEAM</h1>
        </div>
        <div className="row">

          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={pfp} />
              </div>
              <h3>Akam Pabla</h3>
              <p>Co-President</p>
              <div className="icons">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={pfp} />
              </div>
              <h3>Jacob Gomes</h3>
              <p>Co-President</p>
              <div className="icons">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={pfp} />
              </div>
              <h3>Nelson Li</h3>
              <p>Co-President</p>
              <div className="icons">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}