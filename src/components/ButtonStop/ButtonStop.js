// @flow
import React from 'react'
import MdStop from 'react-icons/lib/md/stop'

type Props = {
  onClick: () => any,
  size: string,
  color?: string,
  style?: Object,
}

const ButtonStop = (props: Props): React.Element<*> => (
  <span className="button-pause" role="presentation" onClick={props.onClick} style={{ ...props.style, cursor: 'pointer' }}>
    <MdStop size={props.size} color={props.color} />
  </span>
)

ButtonStop.defaultProps = {
  color: '#757575',
  style: null,
}

export default ButtonStop
