import React from 'react';
import './Team.css';
import profile from './images/akshat.jpg';

export default function Team() {
  return (
    <>
      <div className='content'>
        <div class="team-row-title">
          <h1>OUR TEAM</h1>
        </div>
        <div class="row">

          <div class="column">
            <div class="card">
              <div class="img-container">
                <img src={profile} />
              </div>
              <h3>Akshat Suri</h3>
              <p>Co-President</p>
              <div class="icons">
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}