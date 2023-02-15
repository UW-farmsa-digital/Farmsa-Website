import React from 'react';
import './Resources.css';
import jan2022 from './pdfs/January-2022-Newsletter.pdf';
import jan2021 from './pdfs/January2021.pdf';
import feb2021 from './pdfs/February2021.pdf';
import feb2022 from './pdfs/February-2022-Newsletter.pdf';
import may2022 from './pdfs/May-2022-Newsletter.pdf';
import may2021 from './pdfs/May2021.pdf';
import oct2021 from './pdfs/October2021.pdf';
import sept2021 from './pdfs/September2021.pdf';

export default function Resources() {
  return (
    <>
      <div className='resources-content'>
        <div class="resources-row">
          <h1>Resources</h1>
        </div>
        <div class="resources-row">
          <h2>Newsletters 2022</h2>
        </div>
        <div class="resources-row">
          <div class="resources-column">
            <div class="resources-card">
              <iframe src={jan2022}></iframe>
              <div class="resources-link">
                <a href={jan2022} target='_blank'>January 2022</a>
              </div>            
            </div>
          </div>

          <div class="resources-column">
            <div class="resources-card">
              <iframe src={feb2022}></iframe>
              <div class="resources-link">
                <a href={feb2022} target='_blank'>February 2022</a>
              </div>            
            </div>
          </div>

          <div class="resources-column">
            <div class="resources-card">
              <iframe src={may2022}></iframe>
              <div class="resources-link">
                <a href={may2022} target='_blank'>May 2022</a>
              </div>            
            </div>
          </div>
        </div>
        
        <div class="resources-row">
          <h2>Newsletters 2021</h2>
        </div>
        <div class="resources-row">
          <div class="resources-column">
            <div class="resources-card">
              <iframe src={jan2021}></iframe>
              <div class="resources-link">
                <a href={jan2021} target='_blank'>January 2021</a>
              </div>            
            </div>
          </div>

          <div class="resources-column">
            <div class="resources-card">
              <iframe src={feb2021}></iframe>
              <div class="resources-link">
                <a href={feb2021} target='_blank'>February 2021</a>
              </div>            
            </div>
          </div>

          <div class="resources-column">
            <div class="resources-card">
              <iframe src={may2021}></iframe>
              <div class="resources-link">
                <a href={may2021} target='_blank'>May 2021</a>
              </div>            
            </div>
          </div>

          <div class="resources-column">
            <div class="resources-card">
              <iframe src={oct2021}></iframe>
              <div class="resources-link">
                <a href={oct2021} target='_blank'>October 2021</a>
              </div>            
            </div>
          </div>

          <div class="resources-column">
            <div class="resources-card">
              <iframe src={sept2021}></iframe>
              <div class="resources-link">
                <a href={sept2021} target='_blank'>September 2021</a>
              </div>            
            </div>
          </div>
        </div>

      </div>
    </>
  );
}