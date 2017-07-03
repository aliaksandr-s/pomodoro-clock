// @flow
import React from 'react'
import MdPlayArrow from 'react-icons/lib/md/play-arrow'

type Props = {
  onClick: () => any,
  size: string,
  color?: string,
  style?: Object
}

const ButtonPlay = (props: Props): React.Element<*> => (
  <span style={{ ...props.style, cursor: 'pointer' }} className="button-pause" role="presentation" onClick={props.onClick}>
    <MdPlayArrow size={props.size} color={props.color} />
  </span>
)

ButtonPlay.defaultProps = {
  color: '#757575',
  style: null,
}

export default ButtonPlay
