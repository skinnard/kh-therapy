import React from 'react'
import style from './InnerContainer.module.scss'

function InnerContainer({ size, children }) {
  
  let divStyle = {
    width: '100%',
    maxWidth: size === 'small' ? '650px' : '1200px',
    margin: '0 auto',
  }

  return (
    <div className={style.innerContainer} style={divStyle}>
      {children}
    </div>
  )
}

export default InnerContainer
