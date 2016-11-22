import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

// First argument is the React component we want to render
// Second argument is the HTML element that will contain
// your React component
ReactDOM.render(
  // App will be our root component
  // All other components will descendants of it
  <App />,
  document.getElementById('root')
);
