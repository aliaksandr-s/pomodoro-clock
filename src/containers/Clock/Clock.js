// @flow
import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'components/CircularProgress/CircularProgress'
import Timer from 'components/Timer/Timer'
import {
  increaseCounter,
  decreaseCounter,
} from 'actions/index'
import './Clock.css'

type Props = {

}

const Clock = (props: Props): React.Element<*> => (
  <div className="Clock">
    <Timer className="Clock__timer" value={props.workLength.format('mm:ss')} />
    <CircularProgress percentage={50} classForPercentage={percentage => 'work'} />
  </div>
)

function mapStateToProps({ workLength, breakLength, time }) {
  return { workLength, breakLength, time }
}

export default connect(mapStateToProps, { increaseCounter, decreaseCounter })(Clock)
