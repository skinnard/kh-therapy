import React from 'react'
import style from './InnerContainer.module.scss'

function InnerContainer({ size, children }) {
  
  let containerSize;

  if (size === 'small') {
    containerSize = '650px';
  } else if (size === 'medium') {
    containerSize = '800px';
  } else {
    containerSize = '1200px';
  }

  let divStyle = {
    width: '100%',
    maxWidth: containerSize,
    margin: '0 auto',
  }

  return (
    <div className={style.innerContainer} style={divStyle}>
      {children}
    </div>
  )
}

export default InnerContainer
