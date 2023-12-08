
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter

import App from './App'; // Your main App component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
