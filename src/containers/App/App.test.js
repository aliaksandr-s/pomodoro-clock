import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('time should be correct', () => {
  const app = new App()
  expect(app.state.workLength.format('mm:ss')).toBe('25:00')
  expect(app.state.workLength.add(10, 'm').format('mm:ss')).toBe('35:00')
  expect(app.state.workLength.subtract(5, 'm').format('mm:ss')).toBe('30:00')
  expect(app.state.breakLength.add(5, 'm').format('mm:ss')).toBe('10:00')
  expect(app.state.breakLength.subtract(10, 'm').format('mm:ss')).toBe('00:00')
})
