// @flow
import React, { Component } from 'react'
import moment from 'moment'
import Counter from 'components/Counter/Counter'
import Timer from 'components/Timer/Timer'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import ButtonPause from 'components/ButtonPause/ButtonPause'
import ButtonStop from 'components/ButtonStop/ButtonStop'
import './Clock.css'

type AppState = {
  workLength: moment,
  breakLength: moment,
  clock: moment,
}

class Clock extends Component {
  constructor() {
    super()

    this.state = {
      clock: moment(),
      workLength: moment().minute(25).second(0),
      breakLength: moment().minute(5).second(0),
    }
  }

  state: AppState

  componentDidMount() {
    this.updateClock()
  }

  setTimeout() {
    this.timer = setTimeout(() => {
      if (!this.stopped) this.setTimeout()
      this.setState({
        clock: this.state.clock.subtract(1, 's'),
      })
    }, 1000)
  }

  stopped: boolean
  timer: number

  updateClock() {
    const minute = this.state.workLength.minute()
    this.setState({
      clock: this.state.clock.minute(minute).second(0),
    })
  }

  start() {
    if (this.timer && !this.stopped) {
      return
    }
    this.stopped = false
    this.setTimeout()
  }

  pause() {
    this.stopped = true
    clearTimeout(this.timer)
  }

  reset() {
    this.pause()
    this.updateClock()
  }

  render() {
    return (
      <div className="clock">
        <Timer value={this.state.clock.format('mm:ss')} />
        <ButtonPlay size="40" onClick={() => { this.start() }} />
        <ButtonPause size="40" onClick={() => { this.pause() }} />
        <ButtonStop size="40" onClick={() => { this.reset() }} />
        <Counter
          value={this.state.workLength.format('mm')}
          onIncrease={() => this.setState({ workLength: this.state.workLength.add(1, 'm') }, () => this.updateClock())}
          onDecrease={() => this.setState({ workLength: this.state.workLength.subtract(1, 'm') }, () => this.updateClock())}
        />
      </div>
    )
  }
}

export default Clock
