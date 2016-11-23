import React from 'react';
import HelloWorld from './hello-world';

export default function (props) {
  // make sure that we will iterate over an empty array if props.name
  // is undefined 
  var names = props.names || [];
  return (
    <ul className='Greetings'>
      {
        // Returning an array of components inside {} will
        // render all of those components
        names.map(
          function (name, index) {
            // You must pass a key prop to elements that are
            // from an array. React will use that key to figure out
            // if it should rerender or keep the element.
            // The key must be unique!
            return <HelloWorld key={index} name={name} />
          }
        )
      }
    </ul>
  )
}
