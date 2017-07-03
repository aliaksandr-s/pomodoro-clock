// @flow

import React from 'react'
import './Counter.css'

type Props = {
  onDecrease: () => void,
  onIncrease: () => void,
  title: string,
  value: number,
  color?: string,
  style?: Object
}

const Counter = (props: Props): React.Element<*> => (
  <div style={{ ...props.style }} className="counter">
    <div style={{ color: props.color }} className="counter__title">{props.title}</div>
    <div className="counter__content">
      <span className="counter__controll" role="presentation" onClick={props.onDecrease}>-</span>
      <span className="counter__value">{props.value}</span>
      <span className="counter__controll" role="presentation" onClick={props.onIncrease}>+</span>
    </div>
  </div>
)

Counter.defaultProps = {
  style: null,
  color: null,
}

export default Counter
