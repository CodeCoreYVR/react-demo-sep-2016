import React from 'react'
import Shape from './shape'

export default function (props) {
  // By using the spread operator `...` you can pass,
  // an entire javascript object as props
  return <Shape type='square' {...props} />
  // if 👆 props had a color property using the notation above
  // would syntax sugar for the code below 👇
  // return <Shape type='square' color={props.color} />
}
