// @flow
import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import './CircularProgress.css'

type Props = {
  percentage: number,
  classForPercentage: () => string
}

const CircularProgress = (props: Props): React.Element<*> => (
  <CircularProgressbar
    percentage={props.percentage}
    strokeWidth={2}
    classForPercentage={props.classForPercentage}
  />
)

export default CircularProgress
