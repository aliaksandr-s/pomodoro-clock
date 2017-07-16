// @flow

import React from 'react'
import './Timer.css'

type Props = {
  minutes: string,
  seconds: string,
  className: string
}

const getFirstNumber = num => num.split('')[0]
const getSecondNumber = num => num.split('')[1]

const Timer = (props: Props): React.Element<*> => (
  <div className={props.className} >
    <div className="timer__time">{getFirstNumber(props.minutes)}</div>
    <div className="timer__time">{getSecondNumber(props.minutes)}</div>
    <span>:</span>
    <div className="timer__time">{getFirstNumber(props.seconds)}</div>
    <div className="timer__time">{getSecondNumber(props.seconds)}</div>
  </div>
)

export default Timer
