// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import moment from 'moment'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import ButtonPause from 'components/ButtonPause/ButtonPause'
import ButtonStop from 'components/ButtonStop/ButtonStop'
import Clock from '../Clock/Clock'
import Counters from '../Counters/Counters'
import reducers from '../../reducers/index'
import './App.css'


type AppState = {
  workLength: moment,
  breakLength: moment,
  clock: moment,
}

class Clock333 extends Component {
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
      <Provider store={createStore(reducers)}>
        <div className="clock">
          <ButtonPlay size="40" onClick={() => { this.start() }} />
          <ButtonPause size="40" onClick={() => { this.pause() }} />
          <ButtonStop size="40" onClick={() => { this.reset() }} />
        </div>
      </Provider>
    )
  }
}

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Clock />
      <Counters />
    </div>
  </Provider>
)

export default App
