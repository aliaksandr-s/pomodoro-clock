// @flow
import React from 'react'
import moment from 'moment'
import CounterComponent from 'components/Counter/Counter'
import { connect } from 'react-redux'
import {
  increaseCounter,
  decreaseCounter,
} from 'actions/index'

export const COUNTER_TYPES = {
  work: 'work',
  break: 'break',
}

type Props = {
  increaseCounter: (type: string) => void,
  decreaseCounter: (type: string) => void,
  breakLength: moment,
  workLength: moment
}

const Counters = (props: Props): React.Element<*> => (
  <div style={{ display: 'flex' }}>
    <CounterComponent
      style={{ marginRight: '300px' }}
      title="Break"
      value={props.breakLength.format('mm')}
      onIncrease={() => props.increaseCounter(COUNTER_TYPES.break)}
      onDecrease={() => props.decreaseCounter(COUNTER_TYPES.break)}
    />
    <CounterComponent
      title="Work"
      value={props.workLength.format('mm')}
      onIncrease={() => props.increaseCounter(COUNTER_TYPES.work)}
      onDecrease={() => props.decreaseCounter(COUNTER_TYPES.work)}
    />
  </div>
)

function mapStateToProps({ workLength, breakLength }) {
  return { workLength, breakLength }
}

export default connect(mapStateToProps, { increaseCounter, decreaseCounter })(Counters)
