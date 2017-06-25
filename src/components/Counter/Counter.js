// @flow

import React from 'react'
import './Counter.css'

type Props = {
  onDecrease: () => void,
  onIncrease: () => void,
  value: number
}

const Counter = (props: Props): React.Element<*> => (
  <div className="counter">
    <span className="counter__controll" role="presentation" onClick={props.onDecrease}>-</span>
    <span className="counter__value">{props.value}</span>
    <span className="counter__controll" role="presentation" onClick={props.onIncrease}>+</span>
  </div>
  )

export default Counter
