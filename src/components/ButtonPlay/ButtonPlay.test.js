import React from 'react'
import ReactDOM from 'react-dom'
import ButtonPause from './ButtonPlay'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonPause />, div)
})
