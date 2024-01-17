import React from 'react'
import style from './InnerContainer.scss'

function InnerContainer({ size, children, classes }) {
  let containerSize

  if (size === 'small') {
    containerSize = '650px'
  } else if (size === 'medium') {
    containerSize = '800px'
  } else {
    containerSize = '1200px'
  }

  let divStyle = {
    width: '100%',
    maxWidth: containerSize,
  }

  return (
    <div className={`innerContainer ${classes}`} style={divStyle}>
      {children}
    </div>
  )
}

export default InnerContainer
