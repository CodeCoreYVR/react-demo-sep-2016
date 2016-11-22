import React from 'react';
import ReactDOM from 'react-dom';

// Components are passed props objects
// props will contain option or properties that will be used by
// your component
function HelloWorld (props) {
  // When creating a component, make sure that you always return
  // a React element (i.e. JSX tags)
  return <p>Hellow world and hello {props.name}!</p>
}

// First argument is the React component we want to render
// Second argument is the HTML element that will contain
// your React component
ReactDOM.render(
  <HelloWorld name="Steve" />,
  document.getElementById('root')
);
