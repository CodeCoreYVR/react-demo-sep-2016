import React from 'react'

export default class StopWatch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }

    this.incrementCount = this.incrementCount.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
  }

  incrementCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  runCounter () {
    if (!this.counterId) {
      this.counterId = setInterval(this.incrementCount, 1000);
    }
  }

  // The method below will be called once StopWatch is first rendered
  // in the document. This is very similar to jQuery's $(document).ready
  componentDidMount () {
    // setInterval returns an integer. This is an id that refers
    // to the interval process. We can use the id to stop it at any time
    this.runCounter()
  }

  start () {
    this.runCounter()
  }

  stop () {
    // Knowing an interval's id, we can use clearInterval to stop
    // it from running
    clearInterval(this.counterId)
    this.counterId = null;
  }

  reset () {
    this.stop()
    this.setState({count: 0})
  }

  render () {
    return (
      <div className="StopWatch">
        {/* we must return strings, numbers or components from
         the contents of {} */}
        <b>Count: </b> {this.state.count}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
