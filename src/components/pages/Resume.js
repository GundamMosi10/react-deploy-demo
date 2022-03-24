import React from 'react';
import resume from "../../Assets/ColinResume2021NEW3.pdf";
import '../styles/resume.css';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
        <a href={resume} download>My Resume</a>
      </p>
    </div>
  );
}