import React, { useEffect } from 'react'
import './mobileMenuItems.scss'
import { Link } from 'gatsby'

function MobileMenuItems() {
  // const handleClick = () => {
  //   var el = document.querySelector('.hamburger')
  //   el.classList.toggle('is-active')
  // }

  return (
    <div id="mobile-menu-items" className="mobileMenuItems">
      <div className="items-wrapper">
        <Link className="item" to="/about">
          about
        </Link>
        <Link className="item" to="/services">
          services
        </Link>
        <Link className="item" to="/resources">
          resources
        </Link>
        <Link className="item last" to="/contact">
          contact
        </Link>
      </div>
    </div>
  )
}

export default MobileMenuItems
