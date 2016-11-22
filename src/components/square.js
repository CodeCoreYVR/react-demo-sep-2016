import React from 'react'

export default function (props) {
  var style = {
    width: '5rem',
    height: '5rem',
    // backgroundColor is now dependent on the
    // the property name of the props object
    // Because of ||, it will fallback to Blue if props.name
    // is undefined
    backgroundColor: props.name || 'Blue'
  }

  return <div className='square' style={style}></div>
}
