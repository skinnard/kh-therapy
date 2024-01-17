import React from 'react'
import './coming-soon.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="coming-soon" className="cs-wrapper">
    <div className="flex">
      <div className="flex-item text-center">
        <h1 className="text-5xl leading-tight">
          New Website
          <br />
          Coming Soon!
        </h1>
        <p className="text-xl">
          Keep a look out for my beautiful new site! In the meantime, you can
          contact me here.
        </p>
        <ul className="mt-20">
          <li className="pb-3">
            <a
              className="text-xl font-semibold cursor-pointer"
              href="mailto:
therapy@kristenhodges.com"
              target="_blank"
            >
              therapy@kristenhodges.com
            </a>
          </li>
          <li>
            <a
              className="text-xl font-semibold cursor-pointer"
              href="tel:16472693436"
            >
              1 647-269-3436
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    {/* <Arrow /> */}
  </section>
)