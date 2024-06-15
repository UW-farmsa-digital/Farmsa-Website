import React from 'react';
import './Team.css';
import profile from './images/akshat.jpg';
import pfp from './images/profile-placeholder.jpg';
import ChuhanProfile from './images/Chuhan.png';
import AgamDeepProfile from './images/Agamdeep.png';
import DanielProfile from './images/Daniel.jpg';
import ArshiyaProfile from './images/Arshiya.jpg';
import KatherineProfile from './images/Katherine.png';
import AmritProfile from './images/Amrit.png';
import VictoriaProfile from './images/Victoria.png';
import EnochProfile from './images/Enoch.jpg';
import ScarlettProfile from './images/Scarlett.jpg';

export default function Team() {
  return (
    <>
      <div className='content'>
        <div class="team-row-title">
          <h1>OUR TEAM</h1>
        </div>

        <div className="row">

          <div className="column">
            <a href="https://www.linkedin.com/in/chuhanhuang0925/" target="_blank" rel="noopener noreferrer">
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

          <div className="column">
            <a href="https://www.linkedin.com/in/-victoria-huang/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={VictoriaProfile} />
                </div>
                <h3>Victoria Huang</h3>
                <p>Co-Market Research VP</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/amritganju/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={AmritProfile} />
                </div>
                <h3>Amrit Ganju</h3>
                <p>Co-Market Research VP</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/thedanieljiang/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={DanielProfile} />
                </div>
                <h3>Daniel Jiang</h3>
                <p>Internal VP</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/arshiya-aggarwal-907582271/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={ArshiyaProfile} />
                </div>
                <h3>Arshiya Aggarwal</h3>
                <p>Corporate VP</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/enoch-tin/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={EnochProfile} />
                </div>
                <h3>Enoch Tin</h3>
                <p>Finance VP</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/in/katherinearyawan/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={KatherineProfile} />
                </div>
                <h3>Katherine Aryawan</h3>
                <p>Technology VP</p>
                <div className="icons">
                    <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="column">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="img-container">
                  <img src={ScarlettProfile} />
                </div>
                <h3>Scarlett Xue</h3>
                <p>Events VP</p>
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
