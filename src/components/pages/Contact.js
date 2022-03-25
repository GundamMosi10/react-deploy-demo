import React from 'react';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className="container">
      <h1>Connect With Me</h1>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Send your Request</h3>
          <form>

            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="John Smith"></input>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Phone</label>
                <input type="text" placeholder="1 212 345 6789"></input>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="johnsmith@gmail.com"></input>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="placeholder"></input>
              </div>
            </div>
            <label>Message</label>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">SEND</button>

          </form>

        </div>



        <div className="contact-right">
          <h3>Reach Me</h3>
          <table>
            <tr>
              <td>Email</td>
              <td>contactme@example.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>1 212 345 6789</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>20 W 34th St, New York, NY 10001</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}