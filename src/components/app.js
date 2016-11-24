// You must always import React in a component file
import React from 'react';

// Component NAMES must always be CAPITALIZED!

// 👇 relative import. After from, make sure to write the path
// beginning from the current file's path
import HelloWorld, {HelloWorldAsFunc} from './hello-world';

// the name that follows `import` will become a javascript
// variable that references the imported code from the module
// following `from`
import Square from './square';
import Rectangle from './rectangle';
import Shape from './shape';
import Greetings from './greetings';

// export default below is similar to
// module.exports = function (props) { ...
export default function (props) {
  // kebab-case CSS properties become camelCase
  // the values of CSS properties must be strings
  var appStyle = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  }

  return (
    <div className='App' style={appStyle}>
      {/* This is how we comment in jsx */}
      {/* <HelloWorld name="Babs McButterson" /> */}
      <HelloWorld name="Finkle Butterwoth" />
      <HelloWorld name="Doddy Derington the III" />
      <Square />
      <Rectangle />
      <Shape type='circle' colors={['Blue', 'Green', 'Yellow', 'Pink']} />
      <Greetings
       names={['Jean', 'Xavier', 'Pumpernickle']} />
    </div>
  )
}
