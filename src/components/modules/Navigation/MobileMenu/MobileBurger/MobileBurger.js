import React, { useEffect } from 'react'
import style from './MobileBurger.module.scss'
import '../../../../../styles/hamburgers/hamburgers.scss'
import { Link } from 'gatsby'

function MobileBurger() {
  const handleClick = () => {
    var el = document.querySelector('.hamburger')
    var menu = document.getElementById('mobile-menu-items')
    var body = document.querySelector('body')
    el.classList.toggle('is-active')
    menu.classList.toggle('is-shown')

    if (body.classList.contains('fixed')) {
      body.classList.remove('fixed')
      console.log('remove fixed')
    } else {
      body.classList.add('fixed')
      console.log('add fixed')
    }
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
