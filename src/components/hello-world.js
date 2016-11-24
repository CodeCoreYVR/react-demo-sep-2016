// When importing an npm package, you need to refer to it by name
// and not its path
import React from 'react';

// Alternate way of declaring a component
// Make sure your class based component inherits from React.Component
export default class HelloWorld extends React.Component {
  // constructor is analogous to Ruby initialize
  // the method is called whenever an instance of the class
  // is created
  constructor (props) {
    // in a class based component, you must call super(props)
    // this will the constructor defined in React.Component
    super(props)

    // when initializing the state object, you directly modify it
    // do not use the setState method yet
    this.state = {
      greeting: 'Hi'
    }

    // using .bind(this) will make sure that when toggleGreeting
    // is called by an event listener, an ajax request, setTimeout or
    // any other asynchronous function that will still hold a reference
    // to the current object (being the component)
    this.toggleGreeting = this.toggleGreeting.bind(this)
  }

  toggleGreeting (event) {
    this.setState({
      greeting: this.state.greeting === 'Hi' ? 'Bye' : 'Hi'
    })
  }

  render () {
    var style = {
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: '100',
      backgroundColor: 'LightBlue',
      color: 'Grey',
      padding: '0.5rem 0.8rem',
      margin: '0.25rem 0'
    }

    return (
      // style is a prop of a basic React components
      // Events in React are props set on base HTML components
      <h2
        onMouseEnter={this.toggleGreeting}
        onMouseLeave={this.toggleGreeting}
        className='HelloWorld'
        style={style}>
        {/* in a class based component, props is a property of
        this
        this.state is just a javascript object, you can read from it
        like any other object
        */}
        {this.state.greeting} world and {this.state.greeting} {this.props.name}!
      </h2>
    )
  }
}

// Components are passed props objects
// props will contain option or properties that will be used by
// your component
export function HelloWorldAsFunc (props) {
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
