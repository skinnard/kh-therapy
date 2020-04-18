import React from 'react'
import { Link } from 'gatsby'
import LogoBlue from '../../../svg/logo-blue.svg'
import LogoWhite from '../../../svg/logo-white.svg'
import style from './logo.module.scss'

function Logo(props) {
  let logo
  if (props.color === 'blue') {
    logo = <LogoBlue />
  } else {
    logo = <LogoWhite />
  }

  return (
    <div className={style.logo}>
      <Link to="/">{logo}</Link>
    </div>
  )
}

export default Logo
