import React, { useEffect } from 'react'
import style from './mobileBurger.module.scss'
import '../../../../styles/hamburgers/hamburgers.scss'
import './hamburger-settings.scss'
import { Link } from 'gatsby'

function MobileMenu() {
  // useEffect(() => {
  //   var el = document.querySelector('.hamburger');
  // })

  const handleClick = () => {
    var el = document.querySelector('.hamburger')
    el.classList.toggle('is-active')
  }

  return (
    <div id="mobile-menu" className={style.mobileMenu}>
      <div className={style.menu}>
        <Link className={style.navLink} to="/blog">
          about
        </Link>
        <Link className={style.navLink} to="/blog">
          services
        </Link>
        <Link className={style.navLink} to="/blog">
          resources
        </Link>
        <Link className={style.navLink} to="/blog">
          contact
        </Link>
      </div>
    </div>
  )
}

export default MobileMenu
