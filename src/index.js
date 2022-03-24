import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//maybe put my own css file here before the bootstrap to make it more important
import 'bootstrap/dist/css/bootstrap.min.css'; // maybe import bootstrap css here 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


