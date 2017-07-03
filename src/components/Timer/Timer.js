// @flow

import React from 'react'
import './Timer.css'

type Props = {
  minutes: string,
  seconds: string,
  className: string
}

const Timer = (props: Props): React.Element<*> => (
  <div className={props.className} >
    <div className="timer__time">{props.minutes}</div>
    <span>:</span>
    <div className="timer__time">{props.seconds}</div>
  </div>
)

export default Timer
