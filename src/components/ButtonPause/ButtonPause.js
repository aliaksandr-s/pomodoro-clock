// @flow
import React from 'react'
import MdPause from 'react-icons/lib/md/pause'

type Props = {
  onClick: () => any,
  size: string,
  color?: string,
  style?: Object,
}

const ButtonPause = (props: Props): React.Element<*> => (
  <span className="button-pause" role="presentation" onClick={props.onClick} style={{ ...props.style, cursor: 'pointer' }}>
    <MdPause size={props.size} color={props.color} />
  </span>
)

ButtonPause.defaultProps = {
  color: '#757575',
  style: null,
}

export default ButtonPause
