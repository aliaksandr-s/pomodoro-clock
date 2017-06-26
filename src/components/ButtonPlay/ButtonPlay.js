// @flow
import React from 'react'
import MdPlayArrow from 'react-icons/lib/md/play-arrow'

type Props = {
  onClick: () => void,
  size: string,
  color?: string
}

const ButtonPlay = (props: Props): React.Element<*> => (
  <span className="button-pause" role="presentation" onClick={props.onClick} style={{ cursor: 'pointer' }}>
    <MdPlayArrow size={props.size} color={props.color} />
  </span>
)

ButtonPlay.defaultProps = {
  color: '#757575',
}

export default ButtonPlay
