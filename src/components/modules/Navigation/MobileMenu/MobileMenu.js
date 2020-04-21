import React, { useEffect } from 'react'
import style from './mobileMenu.module.scss'
import '../../../../styles/hamburgers/hamburgers.scss'
import './hamburger-settings.scss'

function MobileMenu() {
  // useEffect(() => {
  //   var el = document.querySelector('.hamburger');
  // })

  const handleClick = () => {
    var el = document.querySelector('.hamburger');
    el.classList.toggle('is-active');
  }

  return (
    <div id="mobile-menu" className={style.mobileMenu}>
      <button className="hamburger--collapse hamburger" type="button" onClick={handleClick}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}

export default MobileMenu
