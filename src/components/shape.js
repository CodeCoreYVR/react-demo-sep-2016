import React from 'react';

const COLORS = ['Magenta', 'Yellow', 'Cyan'];

// If we want state, we need a class-based component
export default class Shape extends React.Component {
  constructor (props) {
    super(props);

    this.state = {colorIndex: 0};

    // Don't forget to bind(this) on methods that will be
    // used as callbacks (i.e. called asynchronously)
    this.cycleColor =  this.cycleColor.bind(this)
  }

  // this methods returns the colors prop
  // if it doesn't exist, it returns the COLORS array
  colors () {
    return this.props.colors || COLORS
  }

  // cycleColor will be used as an event handler for the
  // onClick event (this is why it will called with the event argument)
  cycleColor (event) {
    console.info('Shape was clicked!')
    this.setState({
      colorIndex: (this.state.colorIndex + 1) % this.colors().length
    })
  }
  // instance methods for a javascript class have be defined in the
  // body of the class, they can't be defined in the constructor or
  // any other methods

  render () {
    var style = {
      width: '5rem',
      height: '5rem',
      borderRadius: this.props.type === 'circle' ? '999999px' : '0',
      backgroundColor: this.colors()[this.state.colorIndex]
    }

    // Don't forget that props is now a property of this
    return <div
      onClick={this.cycleColor}
      className={`shape ${this.props.type}`}
      style={style}></div>
  }
}
