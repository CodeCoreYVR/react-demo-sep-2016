// You must always import React in a component file
import React from 'react';
// 👇 relative import. After from, make sure to write the path
// beginning from the current file's path
import HelloWorld from './hello-world'

// export default below is similar to
// module.exports = function (props) { ...
export default function (props) {
  // kebab-case CSS properties become camelCase
  // the values of CSS properties must be strings
  var style = {
    display: 'flex',
    flexFlow: 'column'
  }

  return (
    <div className='App' style={style}>
      {/* This is how we comment in jsx */}
      {/* <HelloWorld name="Babs McButterson" /> */}
      <HelloWorld name="Finkle Butterwoth" />
      <HelloWorld name="Doddy Derington the III" />
    </div>
  )
}
