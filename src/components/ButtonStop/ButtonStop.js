// @flow
import React from 'react'
import MdStop from 'react-icons/lib/md/stop'

type Props = {
  onClick: () => void,
  size: string,
  color?: string
}

const ButtonStop = (props: Props): React.Element<*> => (
  <span className="button-pause" role="presentation" onClick={props.onClick} style={{ cursor: 'pointer' }}>
    <MdStop size={props.size} color={props.color} />
  </span>
)

ButtonStop.defaultProps = {
  color: '#757575',
}

export default ButtonStop
