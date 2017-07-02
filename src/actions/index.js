export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'

export function increaseCounter(counterType) {
  return {
    type: INCREASE_COUNTER,
    payload: counterType,
  }
}

export function decreaseCounter(counterType) {
  return {
    type: DECREASE_COUNTER,
    payload: counterType,
  }
}
