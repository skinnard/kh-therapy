import React, { useEffect } from 'react'
import './mobileMenuItems.scss'
import { Link, navigate } from 'gatsby'

function MobileMenuItems() {
  const handleClick = (e) => {
    var burger = document.querySelector('.hamburger')
    var menu = document.getElementById('mobile-menu-items')
    const menuItems = document.querySelectorAll('#mobile-menu-items a')
    const body = document.querySelector('body')
    
    burger.classList.remove('is-active')
    menu.classList.remove('is-shown')
    body.classList.remove('fixed')
  }

  return (
    <div id="mobile-menu-items" className="mobileMenuItems">
      <div className="items-wrapper">
        <Link onClick={handleClick} className="font-normal uppercase" to="/">
          Welcome
        </Link>
        <Link onClick={handleClick} className="font-normal uppercase" to="/about">
          About Me
        </Link>
        <Link onClick={handleClick} className="font-normal uppercase" to="/services">
          Services
        </Link>
        <Link onClick={handleClick} className="font-normal uppercase" to="/rates-availability/">
          Rates &amp; Availability
        </Link>
        <Link onClick={handleClick} className="font-normal uppercase" to="/contact">
          Connect
        </Link>
      </div>
    </div>
  )
}

export default MobileMenuItems
