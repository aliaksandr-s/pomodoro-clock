import React from 'react'
import ReactDOM from 'react-dom'
import ButtonPause from './ButtonStop'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonPause />, div)
})
