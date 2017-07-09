// @flow
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import CircularProgress from 'components/CircularProgress/CircularProgress'
import Timer from 'components/Timer/Timer'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import ButtonPause from 'components/ButtonPause/ButtonPause'
import ButtonStop from 'components/ButtonStop/ButtonStop'
import {
  start,
  stop,
  reset,
  update,
} from 'actions/index'
import './Clock.css'

type ClockProps = {
  workLength: moment,
  clock: moment,
  start: () => Object,
  stop: () => Object,
  reset: () => Object,
  update: () => Object,
  isStopped: boolean,
}

class Clock extends Component<void, ClockProps, void> {

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  setTimeout() {
    this.timer = setTimeout(() => {
      if (!this.props.isStopped) this.setTimeout()
      this.props.update()
    }, 1000)
  }

  getPercentage() {
    const fullSeconds = this.props.workLength.minutes() * 60
    const currentSeconds = (this.props.clock.minutes() * 60) + this.props.clock.seconds()
    const percantage = 100 - ((currentSeconds / fullSeconds) * 100)
    return percantage
  }

  timer: number

  start() {
    if (this.timer && !this.props.isStopped) {
      return
    }
    this.setTimeout()
    this.props.start()
  }

  pause() {
    clearTimeout(this.timer)
    this.props.stop()
  }

  reset() {
    this.props.reset()
    this.pause()
  }

  render() {
    return (
      <div className="Clock">
        <Timer className="Clock__timer" minutes={this.props.clock.format('mm')} seconds={this.props.clock.format('ss')} />
        <div className="Clock__controlls">
          <ButtonPlay size="70" style={{ display: this.props.isStopped ? 'inline-block' : 'none' }} onClick={() => this.start()} />
          <ButtonPause size="70" style={{ display: this.props.isStopped ? 'none' : 'inline-block' }} onClick={() => this.pause()} />
          <ButtonStop size="70" onClick={() => this.reset()} />
        </div>
        <CircularProgress percentage={this.getPercentage()} classForPercentage={percentage => 'work'} />
      </div>
    )
  }
}

function mapStateToProps({ workLength, breakLength, clock, isStopped }) {
  return { workLength, breakLength, clock, isStopped }
}

export default connect(mapStateToProps, {
  start, stop, reset, update,
})(Clock)
