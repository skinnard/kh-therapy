import React from 'react'
import Arrow from '../Arrow/Arrow'
import style from './button.module.scss'

function Button({
  borderColor,
  textColor,
  backgroundColor,
  arrowColor,
  arrowPadding,
}) {
  const btnStyle = {
    border: `2px solid ${borderColor}`,
    color: textColor,
    background: backgroundColor,
    cursor: 'pointer'
  }

  return (
    <div className={style.btnWrapper}>
      <a className={style.button} href="#" style={btnStyle}>
        Contact
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </a>
    </div>
  )
}

export default Button
