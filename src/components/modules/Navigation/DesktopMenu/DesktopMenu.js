import React from 'react'
import { Link } from 'gatsby'
import './desktopMenu.scss'

function DesktopMenu() {
  return (
    <div className="flex desktopMenu">
      <Link className="pl-[50px] font-normal uppercase" to="/">
        Welcome
      </Link>
      <Link className="pl-[50px] font-normal uppercase" to="/about">
        About Me
      </Link>
      <Link className="pl-[50px] font-normal uppercase" to="/services">
        Services
      </Link>
      <Link
        className="pl-[50px] font-normal uppercase"
        to="/rates-availability"
      >
        Rates &amp; Availability
      </Link>
      <Link className="pl-[50px] font-normal uppercase" to="/contact">
        Connect
      </Link>
    </div>
  )
}

export default DesktopMenu
