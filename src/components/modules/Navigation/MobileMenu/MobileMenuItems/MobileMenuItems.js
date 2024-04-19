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
        <Link className="pl-[50px] font-normal uppercase" to="/about">
          About Me
        </Link>
        <Link className="pl-[50px] font-normal uppercase" to="/services">
          Services
        </Link>
        <Link
          className="pl-[50px] font-normal uppercase"
          to="/rates-availability/"
        >
          Rates &amp; Availability
        </Link>
        {/* <Link className="pl-[50px] font-normal uppercase" to="/faq">
          FAQ
        </Link> */}
        <Link className="pl-[50px] font-normal uppercase" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default MobileMenuItems
