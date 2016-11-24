import React from 'react'

export default class Timer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      time: new Date()
    }

    this.updateTime = this.updateTime.bind(this)
  }

  updateTime () {
    this.setState({
      time: new Date()
    })
  }

  // The method below will be called once Timer is first rendered
  // in the document. This is very similar to jQuery's $(document).ready
  componentDidMount () {
    setInterval(this.updateTime, 1000);
  }

  render () {
    return (
      <div className="Timer">
        {/* we must return strings, numbers or components from
         the contents of {} */}
        <b>Timer: </b> {this.state.time.toString()}
      </div>
    )
  }
}
