// @flow
import React, { Component } from 'react'
import moment from 'moment'
import Counter from 'components/Counter/Counter'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import ButtonPause from 'components/ButtonPause/ButtonPause'
import ButtonStop from 'components/ButtonStop/ButtonStop'
import './Clock.css'

type AppState = {
  workLength: moment,
  breakLength: moment
}

class Clock extends Component {
  constructor() {
    super()

    this.state = {
      workLength: moment().minute(25).second(0),
      breakLength: moment().minute(5).second(0),
    }

    console.log()
  }

  state: AppState

  componentDidMount() {
    console.log('HI')
  }

  render() {
    return (
      <div className="clock">
        <div style={{ fontSize: '3rem' }}>
          {this.state.workLength.format('mm:ss')}
        </div>
        <ButtonPlay size="40" onClick={() => { console.log('play') }} />
        <ButtonPause size="40" onClick={() => { console.log('pause') }} />
        <ButtonStop size="40" onClick={() => { console.log('stop') }} />
        <Counter
          value={this.state.workLength.format('mm')}
          onIncrease={() => this.setState({ workLength: this.state.workLength.add(1, 'm') })}
          onDecrease={() => this.setState({ workLength: this.state.workLength.subtract(1, 'm') })}
        />
      </div>
    )
  }
}

export default Clock
