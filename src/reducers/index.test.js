import { INCREASE_COUNTER, DECREASE_COUNTER, START, STOP } from 'actions/index'
import { COUNTER_TYPES } from 'containers/Counters/Counters'
import moment from 'moment'
import reducer from './index'

const INITIAL_STATE = {
  time: moment(),
  workLength: moment().minute(25).second(0),
  breakLength: moment().minute(5).second(0),
  clock: moment().minute(25).second(0),
  isStopped: true,
}

test('Start stop', () => {
  expect(
    reducer(INITIAL_STATE, {
      type: START,
      payload: null,
    }).isStopped)
  .toBe(false)

  expect(
    reducer(INITIAL_STATE, {
      type: STOP,
      payload: null,
    }).isStopped)
  .toBe(true)
})

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

  expect(
    reducer({ ...INITIAL_STATE, clock: moment().minute(24).second(20) }, {
      type: INCREASE_COUNTER,
      payload: COUNTER_TYPES.work,
    }).workLength.format('mm:ss'))
  .toBe('25:00')

  expect(
    reducer({ ...INITIAL_STATE, clock: moment().minute(24).second(20) }, {
      type: DECREASE_COUNTER,
      payload: COUNTER_TYPES.work,
    }).workLength.format('mm:ss'))
  .toBe('25:00')
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

  expect(
    reducer({ ...INITIAL_STATE, clock: moment().minute(24).second(20) }, {
      type: INCREASE_COUNTER,
      payload: COUNTER_TYPES.break,
    }).breakLength.format('mm:ss'))
  .toBe('05:00')

  expect(
    reducer({ ...INITIAL_STATE, clock: moment().minute(24).second(20) }, {
      type: DECREASE_COUNTER,
      payload: COUNTER_TYPES.break,
    }).breakLength.format('mm:ss'))
  .toBe('05:00')
})
