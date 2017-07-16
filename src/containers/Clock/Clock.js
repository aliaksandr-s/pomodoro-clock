// @flow
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import Sound from 'react-sound'
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
  breakLength: moment,
  clock: moment,
  start: () => Object,
  stop: () => Object,
  reset: () => Object,
  update: () => Object,
  isStopped: boolean,
  clockState: string,
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

  getPlayStatus(soundLength, clockState) {
    const fullMinutes = clockState === 'work'
      ? +this.props.workLength.format('mm') - 1 // we need to subtract 1 minute to get right minutes
      : +this.props.breakLength.format('mm') - 1

    const fullSec = 60
    const isMinCorrect = +this.props.clock.format('mm') === fullMinutes
    const isSecCorrect = +this.props.clock.format('ss') >= fullSec - soundLength
    const isStateCorrect = this.props.clockState === clockState

    if (!this.props.isStopped && isStateCorrect && isMinCorrect && isSecCorrect) {
      return 'PLAYING'
    }
    return 'STOPPED'
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
    clearTimeout(this.timer)
    this.props.reset()
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
        <CircularProgress
          percentage={this.getPercentage()}
          classForPercentage={() => this.props.clockState}
        />
        <Sound
          url="sounds/break.mp3"
          playStatus={this.getPlayStatus(3, 'break')}
        />
        <Sound
          url="sounds/work.wav"
          playStatus={this.getPlayStatus(1, 'work')}
        />
      </div>
    )
  }
}

function mapStateToProps({ workLength, breakLength, clock, isStopped, clockState }) {
  return { workLength, breakLength, clock, isStopped, clockState }
}

export default connect(mapStateToProps, {
  start, stop, reset, update,
})(Clock)
