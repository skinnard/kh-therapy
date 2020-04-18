import React from 'react'
import ArrowWhite from '../../../svg/arrow-right-white.svg'
import ArrowBlue from '../../../svg/arrow-right.svg'

function Arrow(props) {
  let divStyle = {
    display: 'inline',
    paddingLeft: props.arrowPadding,
  }

  return (
    <div className="arrow-icon" style={divStyle}>
      {props.arrowColor == 'blue' ? <ArrowBlue /> : <ArrowWhite />}
    </div>
  )
}

export default Arrow
