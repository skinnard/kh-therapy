import React from 'react'
import Arrow from '../Arrow/Arrow'
import style from './button.module.scss'

function Button({
  borderColor,
  textColor,
  backgroundColor,
  arrowColor,
  arrowPadding,
  hoverBgColor,
  type,
  btnText
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

  let button

  if (type === 'button') {
    button = (
      <button className={style.button} style={btnStyle}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </button>
    )
  } else {
    button = (
      <a className={style.button} href="#" style={btnStyle}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </a>
    )
  }

  return (
    <div className={style.btnWrapper}>
      <div className={style.innerWrapper}>
        <div className={style.btnBg} style={bgStyle}></div>
        {button}
      </div>
    </div>
  )
}

export default Button
