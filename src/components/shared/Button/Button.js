import React from 'react'
import Arrow from '../Arrow/Arrow'
import './button.scss'
import { Link } from 'gatsby'

function Button({
  borderColor,
  textColor,
  backgroundColor,
  arrowColor,
  arrowPadding,
  hoverBgColor,
  type,
  btnText,
  link,
  alignment,
  target,
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

  const wrapperStyle = {
    textAlign: alignment,
  }

  let button, btnType

  if (link === 'false' && type === 'submit') {
    button = (
      <button className="button" style={btnStyle} type={type}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </button>
    )
  } else if (link === 'false' && btnType === 'standard') {
    button = (
      <button className="button" style={btnStyle}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </button>
    )
  } else {
    button = (
      <Link className="button" to={link} style={btnStyle} target={target}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </Link>
    )
  }

  return (
    <div className="btnWrapper" style={wrapperStyle}>
      <div className="innerWrapper">
        <div className="btnBg" style={bgStyle}></div>
        {button}
      </div>
    </div>
  )
}

export default Button
