import React, { useEffect } from 'react'
import style from './mobileMenuItems.scss'
import { Link } from 'gatsby'

function MobileMenuItems() {
  const handleClick = () => {
    let menuItem = document.querySelector(
      '#mobile-menu-items .items-wrapper .item'
    )
    let mobileMenu = document.querySelector('#mobile-menu-items')
    let body = document.querySelector('body')
    body.classList.remove('fixed')
    mobileMenu.classList.remove('is-shown')
  }

  return (
    <div id="mobile-menu-items" className="mobileMenuItems">
      <div className="items-wrapper">
        <Link className="item" to="/about" onClick={handleClick}>
          about
        </Link>
        <Link className="item" to="/services" onClick={handleClick}>
          services
        </Link>
        <Link className="item" to="/resources" onClick={handleClick}>
          resources
        </Link>
        <Link className="item last" to="/contact" onClick={handleClick}>
          contact
        </Link>
      </div>
    </div>
  )
}

export default MobileMenuItems
