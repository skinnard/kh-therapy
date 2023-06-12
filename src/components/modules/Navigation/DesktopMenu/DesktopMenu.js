import React from 'react'
import { Link } from 'gatsby'
import './desktopMenu.scss'

function DesktopMenu() {
  return (
    <div className="flex">
      <Link className="pl-[50px] font-normal" to="/about">
        about
      </Link>
      <Link className="pl-[50px] font-normal" to="/services">
        services
      </Link>
      <Link className="pl-[50px] font-normal" to="/resources">
        resources
      </Link>
      <Link className="pl-[50px] font-normal" to="/faq">
        faq
      </Link>
      <Link className="pl-[50px] font-normal" to="/contact">
        contact
      </Link>
    </div>
  )
}

export default DesktopMenu
