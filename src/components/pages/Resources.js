import React from 'react';
import './Resources.css';
import background from './images/pdfs.jpg';
import jan2022 from './pdfs/January-2022-Newsletter.pdf';
import jan2021 from './pdfs/January2021.pdf';
import jan2020 from './pdfs/January2020.pdf';
import jan2019 from './pdfs/January2019.pdf';
import jan2018 from './pdfs/January2018.pdf';
import jan2023 from './pdfs/January2023.pdf';
import feb2022 from './pdfs/February-2022-Newsletter.pdf';
import feb2021 from './pdfs/February2021.pdf';
import feb2019 from './pdfs/February2019.pdf';
import feb2018 from './pdfs/February2018.pdf';
import mar2019 from './pdfs/March2019.pdf';
import may2022 from './pdfs/May-2022-Newsletter.pdf';
import may2021 from './pdfs/May2021.pdf';
import may2020 from './pdfs/May2020.pdf';
import may2019 from './pdfs/May2019.pdf';
import may2018 from './pdfs/May2018.pdf';
import june2020 from './pdfs/June2020.pdf';
import june2019 from './pdfs/June2019.pdf';
import june2018 from './pdfs/June2018.pdf';
import july2020 from './pdfs/July2020.pdf';
import july2019 from './pdfs/July2019.pdf';
import sept2021 from './pdfs/September2021.pdf';
import sept2020 from './pdfs/September2020.pdf';
import sept2019 from './pdfs/September2019.pdf';
import sept2018 from './pdfs/September2018.pdf';
import oct2021 from './pdfs/October2021.pdf';
import oct2020 from './pdfs/October2020.pdf';
import oct2019 from './pdfs/October2019.pdf';
import oct2018 from './pdfs/October2018.pdf';
import nov2020 from './pdfs/November2020.pdf';
import nov2019 from './pdfs/November2019.pdf';
import nov2018 from './pdfs/November2018.pdf';
import jan2022Cover from './resourcesImages/January2022.png';
import jan2021Cover from './resourcesImages/January2021.png';
import jan2020Cover from './resourcesImages/January2020.png';
import jan2019Cover from './resourcesImages/January2019.png';
import jan2018Cover from './resourcesImages/January2018.png';
import jan2023Cover from './resourcesImages/January2023.png';
import feb2022Cover from './resourcesImages/February2022.png';
import feb2021Cover from './resourcesImages/February2021.png';
import feb2019Cover from './resourcesImages/February2019.png';
import feb2018Cover from './resourcesImages/February2018.png';
import mar2019Cover from './resourcesImages/March2019.png';
import may2022Cover from './resourcesImages/May2022.png';
import may2021Cover from './resourcesImages/May2021.png';
import may2020Cover from './resourcesImages/May2020.png';
import may2019Cover from './resourcesImages/May2019.png';
import may2018Cover from './resourcesImages/May2018.png';
import june2020Cover from './resourcesImages/June2020.png';
import june2019Cover from './resourcesImages/June2019.png';
import june2018Cover from './resourcesImages/June2018.png';
import july2020Cover from './resourcesImages/July2020.png';
import july2019Cover from './resourcesImages/July2019.png';
import sept2021Cover from './resourcesImages/September2021.png';
import sept2020Cover from './resourcesImages/September2020.png';
import sept2019Cover from './resourcesImages/September2019.png';
import sept2018Cover from './resourcesImages/September2018.png';
import oct2021Cover from './resourcesImages/October2021.png';
import oct2020Cover from './resourcesImages/October2020.png';
import oct2019Cover from './resourcesImages/October2019.png';
import oct2018Cover from './resourcesImages/October2018.png';
import nov2020Cover from './resourcesImages/November2020.png';
import nov2019Cover from './resourcesImages/November2019.png';
import nov2018Cover from './resourcesImages/November2018.png';
import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <>
      <div className='resources-content'>
        <div class="resources-row-title">
          <h1>RESOURCES</h1>
        </div>
        
        <div id='2023'>
          <div class="resources-row">
            <h2>Newsletters 2023</h2>
          </div>
          <div class="resources-row">
          <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={jan2023Cover} />
                </div>
                <div class="resources-link">
                  <a href={jan2023} target='_blank'>January 2023</a>
                </div>            
              </div>
            </div>
          </div>
        </div>

        <div id='2022'>
          <div class="resources-row">
            <h2>Newsletters 2022</h2>
          </div>
          <div class="resources-row">
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={jan2022Cover} />
                </div>
                <div class="resources-link">
                  <a href={jan2022} target='_blank'>January 2022</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={feb2022Cover} />
                </div>
                <div class="resources-link">
                  <a href={feb2022} target='_blank'>February 2022</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={may2022Cover} />
                </div>
                <div class="resources-link">
                  <a href={may2022} target='_blank'>May 2022</a>
                </div>            
              </div>
            </div>
          </div>
        </div>

        <div className='2021'>
          <div class="resources-row">
            <h2>Newsletters 2021</h2>
          </div>
          <div class="resources-row">
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={jan2021Cover} />
                </div>
                <div class="resources-link">
                  <a href={jan2021} target='_blank'>January 2021</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={feb2021Cover} />
                </div>
                <div class="resources-link">
                  <a href={feb2021} target='_blank'>February 2021</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={may2021Cover} />
                </div>
                <div class="resources-link">
                  <a href={may2021} target='_blank'>May 2021</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={sept2021Cover} />
                </div>
                <div class="resources-link">
                  <a href={sept2021} target='_blank'>September 2021</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={oct2021Cover} />
                </div>
                <div class="resources-link">
                  <a href={oct2021} target='_blank'>October 2021</a>
                </div>            
              </div>
            </div>

          </div>
        </div>

        <div className='2020'>
          <div class="resources-row">
            <h2>Newsletters 2020</h2>
          </div>
          <div class="resources-row">
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={jan2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={jan2020} target='_blank'>January 2020</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={may2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={may2020} target='_blank'>May 2020</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={june2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={june2020} target='_blank'>June 2020</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={july2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={july2020} target='_blank'>July 2020</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={sept2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={sept2020} target='_blank'>September 2020</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={oct2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={oct2020} target='_blank'>October 2020</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={nov2020Cover} />
                </div>
                <div class="resources-link">
                  <a href={nov2020} target='_blank'>November 2020</a>
                </div>            
              </div>
            </div>

          </div>
        </div>

        <div className='2019'>
          <div class="resources-row">
            <h2>Newsletters 2019</h2>
          </div>
          <div class="resources-row">
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={jan2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={jan2019} target='_blank'>January 2019</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={feb2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={feb2019} target='_blank'>February 2019</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={mar2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={mar2019} target='_blank'>March 2019</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={may2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={may2019} target='_blank'>May 2019</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={june2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={june2019} target='_blank'>June 2019</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={july2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={july2019} target='_blank'>July 2019</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={sept2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={sept2019} target='_blank'>September 2019</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={oct2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={oct2019} target='_blank'>October 2019</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={nov2019Cover} />
                </div>
                <div class="resources-link">
                  <a href={nov2019} target='_blank'>November 2019</a>
                </div>            
              </div>
            </div>
          </div>
        </div>

        <div className='2018'>
          <div class="resources-row">
            <h2>Newsletters 2018</h2>
          </div>
          <div class="resources-row">
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={jan2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={jan2018} target='_blank'>January 2018</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={feb2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={feb2018} target='_blank'>February 2018</a>
                </div>            
              </div>
            </div>

            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={may2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={may2018} target='_blank'>May 2018</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={june2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={june2018} target='_blank'>June 2018</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={sept2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={sept2018} target='_blank'>September 2018</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={oct2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={oct2018} target='_blank'>October 2018</a>
                </div>            
              </div>
            </div>
            <div class="resources-column">
              <div class="resources-card">
                <div class="resources-img" >
                  <img src={nov2018Cover} />
                </div>
                <div class="resources-link">
                  <a href={nov2018} target='_blank'>November 2018</a>
                </div>            
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}