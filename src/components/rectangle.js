import React from 'react';
import Square from './square';

export default function (props) {
  var style = {
    display: 'flex',
    backgroundColor: 'Orange',
    padding: '1rem',
    // You can freely use javascript to generate the
    // value of any CSS property
    width: `${15 + 2}rem`,
    justifyContent: 'space-between'
  }
  return (
    <div className='Rectangle' style={style}>
      <Square name='LightBlue'/>
      <Square name='SkyBlue'/>
      <Square name='DeepSkyBlue'/>
    </div>
  )
}
