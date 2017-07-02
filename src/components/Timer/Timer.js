// @flow

import React from 'react'

type Props = {
  value: string,
  className: string
}

const Timer = (props: Props): React.Element<*> => (
  <div className={props.className} >
    {props.value}
  </div>
)

export default Timer
