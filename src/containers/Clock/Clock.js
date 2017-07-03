// @flow
import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import CircularProgress from 'components/CircularProgress/CircularProgress'
import Timer from 'components/Timer/Timer'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import ButtonPause from 'components/ButtonPause/ButtonPause'
import ButtonStop from 'components/ButtonStop/ButtonStop'
import './Clock.css'

type ClockProps = {
  workLength: moment,
  start: () => Object,
  stop: () => Object,
  reset: () => Object,
  isStopped: boolean,
}

type ClockState = {
  clock: moment,
  isStopped: boolean,
}

class Clock extends Component<void, ClockProps, ClockState> {
  constructor(props) {
    super(props)

    this.state = {
      clock: moment(),
      isStopped: true,
    }
  }
  state: ClockState

  componentDidMount() {
    this.updateClock()
  }

  componentWillReceiveProps(nextProps) {
    this.updateClock(nextProps.workLength.minute())
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  setTimeout() {
    this.timer = setTimeout(() => {
      if (!this.state.isStopped) this.setTimeout()
      this.setState({
        clock: this.state.clock.subtract(1, 's'),
      })
    }, 1000)
  }
  timer: number

  updateClock(minutes = this.props.workLength.minute()) {
    this.setState({
      clock: this.state.clock.minute(minutes).second(0),
    })
  }

  start() {
    if (this.timer && !this.state.isStopped) {
      return
    }
    this.setState({
      isStopped: false,
    })
    this.setTimeout()
  }

  pause() {
    this.setState({
      isStopped: true,
    })
    clearTimeout(this.timer)
  }

  reset() {
    this.pause()
    this.updateClock()
  }

  render() {
    return (
      <div className="Clock">
        <Timer className="Clock__timer" minutes={this.state.clock.format('mm')} seconds={this.state.clock.format('ss')} />
        <div className="Clock__controlls">
          <ButtonPlay size="70" style={{ display: this.state.isStopped ? 'inline-block' : 'none' }} onClick={() => this.start()} />
          <ButtonPause size="70" style={{ display: this.state.isStopped ? 'none' : 'inline-block' }} onClick={() => this.pause()} />
          <ButtonStop size="70" onClick={() => this.reset()} />
        </div>
        <CircularProgress percentage={10} classForPercentage={percentage => 'work'} />
      </div>
    )
  }
}

function mapStateToProps({ workLength, breakLength }) {
  return { workLength, breakLength }
}

export default connect(mapStateToProps, null)(Clock)
