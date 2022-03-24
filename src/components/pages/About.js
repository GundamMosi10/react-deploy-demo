import React from 'react';
import '../styles/about.css';
import me from "../../Assets/6bba22bb-23b0-4046-a306-98091dcc8041 2.jpeg";
import resume from "../../Assets/ColinResume2021NEW3.pdf";

export default function About() {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-img">
              <img src={me} alt="">
              </img>
            </div>
          </div>
          <div className="col-lg-6 colr-lg-offset-1">
            <div className="about-text">
              <h2>Colin M. Cargile</h2>
              <p>I am a Full-Stack web developer based out of New York City</p>
              <p>
                <a href={resume} download>My Resume</a>
              </p>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
}
