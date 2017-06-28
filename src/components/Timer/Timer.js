// @flow

import React from 'react'

type Props = {
  value: string
}

const Timer = (props: Props): React.Element<*> => (
  <div style={{ fontSize: '4rem' }}>
    {props.value}
  </div>
)

export default Timer
