import React from 'react';

export default function (props) {
  var style = {
    width: '5rem',
    height: '5rem',
    borderRadius: props.type === 'circle' ? '999999px' : '0',
    backgroundColor: props.color || 'Blue'
  }

  return <div className={`shape ${props.type}`} style={style}></div>
}
