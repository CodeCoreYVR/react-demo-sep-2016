// When importing an npm package, you need to refer to it by name
// and not its path
import React from 'react';

// Components are passed props objects
// props will contain option or properties that will be used by
// your component
export default function HelloWorld (props) {
  // When creating a component, make sure that you always return
  // a React element (i.e. JSX tags)
  var style = {
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: '100',
    backgroundColor: 'Gainsboro',
    color: 'Grey',
    padding: '0.5rem 0.8rem',
    margin: '0.25rem 0'
  }
  return (
    // style is a prop of a basic React components
    <h2 className='HelloWorld' style={style}>
       Hello world and Hello {props.name}!
    </h2>
  )
}
