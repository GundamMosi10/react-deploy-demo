import React from 'react';
import '../styles/portfolio.css';
import screenshot from "../../Assets/screenshot.png";
import screenshotquack from "../../Assets/Screenshot-QUACK.png";
import screenshotnotetaker from "../../Assets/Screenshot-Note Taker.png";

export default function Portfolio() {
  return (
    <div className="container">  
        <div className="card">  
          <div className="face face1">  
            <div className="content">  
              <img src={screenshot}/>  
              <h3>Smart-Shopper</h3>  
            </div>  
          </div>  
          <div className="face face2">  
            <div className="content">  
              <p>SmartShopper is a price comparison website that takes in a user search and returns the top listing from two of the most popular marketplaces on the web - Amazon and eBay. </p>  
                <a href="https://gundammosi10.github.io/SmartShopper-Application/">Smart Shopper</a>  
            </div>  
          </div>  
        </div>  
        <div className="card">  
          <div className="face face1">  
            <div className="content">  
              <img src={screenshotquack}/>  
              <h3>QUACK</h3>   
            </div>  
          </div>  
          <div className="face face2">  
            <div className="content">  
              <p>Quack is a social media site where users can write down their thoughts and share them with the world.</p>  
                <a href="https://quack-social-app.herokuapp.com/">QUACK</a>  
            </div>  
          </div>  
        </div>  
        <div className="card">  
          <div className="face face1">  
            <div className="content">  
              <img src={screenshotnotetaker}/>  
              <h3>Note Taker</h3>  
            </div>  
          </div>  
          <div className="face face2">  
            <div className="content">  
              <p>This note taking app allows you to keep organized with your day and when you complete a task you can simply delete the note from the app and start new ones.</p>  
                <a href="https://sheltered-dusk-87449.herokuapp.com/">Note Taker</a>  
            </div>  
          </div>  
        </div>  
      </div>  
  );
}