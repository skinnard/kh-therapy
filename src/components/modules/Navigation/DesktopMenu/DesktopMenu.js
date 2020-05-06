import React from 'react'
import { Link } from 'gatsby'
import style from './desktopMenu.module.scss'

function DesktopMenu() {
  return (
    <div className={style.desktopMenu}>
      <Link className={style.navLink} to="/about">
        about
      </Link>
      <Link className={style.navLink} to="/services">
        services
      </Link>
      <Link className={style.navLink} to="/resources">
        resources
      </Link>
      <Link className={style.navLink} to="/faq">
        faq
      </Link>
      <Link className={style.navLink} to="/contact">
        contact
      </Link>
    </div>
  )
}

export default DesktopMenu
