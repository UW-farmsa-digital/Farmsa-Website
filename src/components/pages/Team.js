import React from 'react';
import './Team.css';
import background from './images/background.jpg';

export default function Team() {
  return (
    <>
      <div className='team'>
        <div className='content'>
          <h1>MEET THE TEAM</h1>
          <hr />
          <div className='presidents'>
            <h2>CO-PRESIDENTS</h2>
            <div className='members'>
              <div class="card">
                <div class="box">
                  <img src={background} class= "image" alt="" />
                  <div class="name">First Name</div>
                  <div class="position">Presidents</div>
                  <a href="www.linkedin.com">LinkedIn</a>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src={background} class= "image" alt="" />
                  <div class="name">First Name</div>
                  <div class="position">Presidents</div>
                  <a href="www.linkedin.com">LinkedIn</a>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src={background} class= "image" alt="" />
                  <div class="name">First Name</div>
                  <div class="position">Presidents</div>
                  <a href="www.linkedin.com">LinkedIn</a> 
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </>
  );
}