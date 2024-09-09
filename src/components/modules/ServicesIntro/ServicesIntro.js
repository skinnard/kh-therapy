import React from 'react'
import './servicesIntro.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="services-intro" className="servicesIntroWrapper">
    <InnerContainer>
      <div className="sectionPadding-top">
        <h1 className="title">Services</h1>
        <div className="contentWrapper">
          <div className="shape"></div>
          <div className="textWrapper">
            <p className="subTitle">Psychotherapy Services</p>
            <p>
              Depending on your needs, I provide psychotherapy services that
              help you slow down on the stuck places in your life so you can
              grow in life-changing ways.
            </p>
          </div>
        </div>
      </div>
    </InnerContainer>
    <div className="arrowWrapper">
      <Arrow />
    </div>
  </section>
)
