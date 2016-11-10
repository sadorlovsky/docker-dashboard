import React from 'react'
import { findDOMNode } from 'react-dom'

class Log extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      log: []
    }
  }
  componentDidMount () {
    const socket = new WebSocket('ws://localhost:8181', 'echo-protocol')
    socket.onmessage = event => {
      console.log(event)
      // this.setState({
      //   log: [...this.state.log, JSON.parse(event.data)]
      // })
    }
  }

  render () {
    const logRecords = this.state.log.map(entry => <div key={entry.id}>{entry.date} {entry.text}</div>)
    return (
      <div>
        <h1>Log</h1>
        <div style={{ height: '400px', overflowY: 'auto' }}>
          {logRecords}
        </div>
      </div>
    )
  }
}

export default Log
