import React from 'react'
import Arrow from '../Arrow/Arrow'
import style from './button.module.scss'
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

  let button, btnType

  // <Button
  //   btnText={'Submit'}
  //   link={'false'}
  //   type={'submit'}
  //   borderColor={'#0F4C81'}
  //   textColor={'#fff'}
  //   backgroundColor={'#0F4C81'}
  //   arrowColor={'#0F4C81'}
  //   arrowPadding={'10px'}
  //   hoverBgColor={'#DB6B5C'}
  // />

  if (link === 'false' && type === 'submit') {
    button = (
      <button className={style.button} style={btnStyle} type={type}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </button>
    )
  } else if (link === 'false' && btnType === 'standard') {
    button = (
      <button className={style.button} style={btnStyle}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </button>
    )
  } else {
    button = (
      <Link className={style.button} to={link} style={btnStyle}>
        {btnText}
        <Arrow arrowColor={arrowColor} arrowPadding={arrowPadding} />
      </Link>
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
