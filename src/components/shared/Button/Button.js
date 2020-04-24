import React from 'react'
import Arrow from '../Arrow/Arrow'
import style from './button.module.scss'

function Button({
  borderColor,
  textColor,
  backgroundColor,
  arrowColor,
  arrowPadding,
  hoverBgColor
}) {
  const btnStyle = {
    border: `2px solid ${borderColor}`,
    color: textColor,
    background: backgroundColor,
    cursor: 'pointer',
  }
  const bgStyle = {
    background: hoverBgColor,
  }

  return (
    <div className={style.btnWrapper}>
      <div className={style.innerWrapper}>
        <div className={style.btnBg} style={bgStyle}></div>
        <a className={style.button} href="#" style={btnStyle}>
          Contact
          <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
        </a>
      </div>
    </div>
  )
}

export default Button
