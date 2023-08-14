import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Lorem</p>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="  " alt="" style={{ width: '100%' }} />
            <div className="container">
              <h2>Bala</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>bala@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/  /team2.jpg" alt="" style={{ width: '100%' }} />
            <div className="container">
              <h2>Abhi</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>abhi@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="  " alt="" style={{ width: '100%' }} />
            <div className="container">
              <h2>Vijay</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>vijay@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
