// @flow

import React, { Component } from 'react'
import Counter from 'components/Counter/Counter'

import './Clock.css'


type AppState = {
  test: number
}

class Clock extends Component {
  constructor() {
    super()

    this.state = {
      test: 3,
    }
  }

  state: AppState

  componentDidMount() {
    console.log('HI')
  }

  render() {
    return (
      <div className="clock">
        <Counter
          value={this.state.test}
          onIncrease={() => this.setState({ test: this.state.test + 1 })}
          onDecrease={() => this.setState({ test: this.state.test - 1 })}
        />
      </div>
    )
  }
}

export default Clock
