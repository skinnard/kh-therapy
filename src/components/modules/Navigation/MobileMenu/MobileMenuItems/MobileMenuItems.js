import React, { useEffect } from 'react'
import style from './mobileMenuItems.scss'
import { Link } from 'gatsby'

function MobileMenuItems() {
  // const handleClick = () => {
  //   var el = document.querySelector('.hamburger')
  //   el.classList.toggle('is-active')
  // }

  return (
    <div id="mobile-menu-items" className="mobileMenuItems">
      <div className="items-wrapper">
        <Link className="item" to="/blog">
          about
        </Link>
        <Link className="item" to="/blog">
          services
        </Link>
        <Link className="item" to="/blog">
          resources
        </Link>
        <Link className="item last" to="/blog">
          contact
        </Link>
      </div>
    </div>
  )
}

export default MobileMenuItems
