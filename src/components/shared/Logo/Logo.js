import React from 'react'
import { Link } from 'gatsby'
import LogoBlue from '../../../svg/logo-blue.svg'
import LogoWhite from '../../../svg/logo-white.svg'
import style from './logo.module.scss'

function Logo(props) {
  const handleClick = () => {
    let logoLink = document.querySelector('#logo')
    let body = document.querySelector('body') 
    body.classList.remove('fixed')
    let mobileMenu = document.querySelector('#mobile-menu-items')
    mobileMenu.classList.remove('is-shown')
  }

  let logo
  if (props.color === 'blue') {
    logo = <LogoBlue />
  } else {
    logo = <LogoWhite />
  }

  let divStyle = {
    width: props.width,
    height: props.height,
  }

  return (
    <div className={style.logo} style={divStyle}>
      <Link to="/" id="logo" className={style.logoLink} onClick={handleClick}>
        {logo}
      </Link>
    </div>
  )
}

export default Logo
