import React, { useEffect } from 'react'
import './mobileMenu.scss'
import { Link } from 'gatsby'
import '../../../../styles/hamburgers/hamburgers.scss'
import MobileBurger from './MobileBurger/MobileBurger'
import MobileMenuItems from './MobileMenuItems/MobileMenuItems'

function MobileMenu() {
  return (
    <div id="mobile-menu" className="mobileMenu">
      <MobileBurger />
      <MobileMenuItems />
    </div>
  )
}

export default MobileMenu
