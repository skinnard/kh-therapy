import React from 'react'
import { Link } from 'gatsby'
import style from './DesktopMenu.module.scss'

function DesktopMenu() {
  return (
    <div className={style.desktopMenu}>
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
  )
}

export default DesktopMenu
