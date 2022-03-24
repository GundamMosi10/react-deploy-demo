import React from 'react';
import '../styles/socialmedia.css';

export default function Socials() {
  return (
    <div>
      <section className="card">
                    <div className="container">
                      <a href="https://www.instagram.com/colinmosi/"><button className="btn"><i className="fab fa-instagram" id="instagram"></i></button></a>
                      <a href="https://github.com/GundamMosi10"><button className="btn"><i className="fab fa-github-square github" id="github"></i></button></a>
                      <a href="https://twitter.com/cargile_colin"><button className="btn"><i className="fab fa-twitter" id="twitter"></i></button></a>
                      <a href="https://www.linkedin.com/in/colin-cargile-71b289166/"><button className="btn"><i className="fab fa-linkedin" id="linkedin"></i></button></a>
                    </div>
      </section>
    </div>
  );
}

