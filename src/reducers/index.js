import moment from 'moment'
import { COUNTER_TYPES } from 'containers/Counters/Counters'

import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  START,
  STOP,
  RESET,
  UPDATE,
} from 'actions/index'

const INITIAL_STATE = {
  workLength: moment().minute(25).second(0),
  breakLength: moment().minute(5).second(0),
  clock: moment().minute(25).second(0),
  isStopped: true,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      if (action.payload === COUNTER_TYPES.work) {
        return {
          ...state,
          workLength: moment().minute(state.workLength.minute() + 1).second(0),
          clock: moment().minute(state.workLength.minute() + 1).second(0),
        }
      } else if (action.payload === COUNTER_TYPES.break) {
        return {
          ...state,
          breakLength: moment().minute(state.breakLength.minute() + 1).second(0),
        }
      }
      break
    case DECREASE_COUNTER:
      if (action.payload === COUNTER_TYPES.work) {
        return {
          ...state,
          workLength: moment().minute(state.workLength.minute() - 1).second(0),
          clock: moment().minute(state.workLength.minute() - 1).second(0),
        }
      } else if (action.payload === COUNTER_TYPES.break) {
        return {
          ...state,
          breakLength: moment().minute(state.breakLength.minute() - 1).second(0),
        }
      }
      break
    case START:
      return {
        ...state,
        isStopped: false,
      }
    case STOP: {
      return {
        ...state,
        isStopped: true,
      }
    }
    case RESET: {
      return {
        ...state,
        clock: moment(state.workLength),
      }
    }
    case UPDATE:
      return {
        ...state,
        clock: moment(state.clock.subtract(1, 's')),
      }
    default:
      return state
  }
  return false
}
