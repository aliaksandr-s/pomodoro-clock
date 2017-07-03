import { INCREASE_COUNTER, DECREASE_COUNTER } from 'actions/index'
import { COUNTER_TYPES } from 'containers/Counters/Counters'
import moment from 'moment'
import reducer from './index'

const INITIAL_STATE = {
  time: moment(),
  workLength: moment().minute(25).second(0),
  breakLength: moment().minute(5).second(0),
}

test('Counter Work', () => {
  expect(
    reducer(INITIAL_STATE, {
      type: INCREASE_COUNTER,
      payload: COUNTER_TYPES.work,
    }).workLength.format('mm:ss'))
  .toBe('26:00')

  expect(
    reducer(INITIAL_STATE, {
      type: DECREASE_COUNTER,
      payload: COUNTER_TYPES.work,
    }).workLength.format('mm:ss'))
  .toBe('24:00')
})

test('Counter Break', () => {
  expect(
    reducer(INITIAL_STATE, {
      type: INCREASE_COUNTER,
      payload: COUNTER_TYPES.break,
    }).breakLength.format('mm:ss'))
  .toBe('06:00')

  expect(
    reducer(INITIAL_STATE, {
      type: DECREASE_COUNTER,
      payload: COUNTER_TYPES.break,
    }).breakLength.format('mm:ss'))
  .toBe('04:00')
})
