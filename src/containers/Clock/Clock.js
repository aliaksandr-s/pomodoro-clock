// @flow

import React, { Component } from 'react'
import './Clock.css'

type AppState = {
  test: number
}

class Clock extends Component {
  constructor() {
    super()

    this.state = {
      test: 1,
    }
  }
  state: AppState

  componentDidMount() {
    console.log('HI')
  }

  render() {
    return (
      <div className="clock">{this.state.test}</div>
    )
  }
}

export default Clock
