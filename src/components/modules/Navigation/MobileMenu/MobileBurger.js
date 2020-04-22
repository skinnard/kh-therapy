import React, { useEffect } from 'react'
import style from './MobileBurger.module.scss'
import '../../../../styles/hamburgers/hamburgers.scss'
import './hamburger-settings.scss'
import { Link } from 'gatsby'

function MobileBurger() {
  // useEffect(() => {
  //   var el = document.querySelector('.hamburger');
  // })

  const handleClick = () => {
    var el = document.querySelector('.hamburger')
    el.classList.toggle('is-active')
  }

  return (
    <div id="mobile-burger" className={style.mobileBurger}>
      <button
        className="hamburger--collapse hamburger"
        type="button"
        onClick={handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}

export default MobileBurger