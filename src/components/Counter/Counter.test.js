import React from 'react'
import render from 'react-test-renderer'
import Counter from './Counter'

it('renders correctly', () => {
  const rendered = render.create(
    <Counter value={10} />,
  )
  expect(rendered.toJSON()).toMatchSnapshot()
})

