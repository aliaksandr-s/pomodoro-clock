import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './Clock'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Clock />, div)
})

test('time should be correct', () => {
  const clock = new Clock()
  expect(clock.state.workLength.format('mm:ss')).toBe('25:00')
  expect(clock.state.workLength.add(10, 'm').format('mm:ss')).toBe('35:00')
  expect(clock.state.workLength.subtract(5, 'm').format('mm:ss')).toBe('30:00')
  expect(clock.state.breakLength.add(5, 'm').format('mm:ss')).toBe('10:00')
  expect(clock.state.breakLength.subtract(10, 'm').format('mm:ss')).toBe('00:00')
})
