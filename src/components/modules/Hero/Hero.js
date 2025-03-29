import React from 'react'
import './hero.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="hero" className="heroWrapper w-full h-full">
    <InnerContainer>
      <div className="flex columns">
        <div className="flex-item text-center column content-wrapper">
          <h1 className="hero-title text-[4rem] leading-tight">
            Compassionate and&nbsp;supportive psychotherapy
          </h1>
          {/* <p className="subtitle">Compassionate and supportive psychotherapy </p> */}
          <Button
            btnText={'Connect'}
            link={'/contact'}
            // type={''}
            borderColor={'#0F4C81'}
            textColor={'#0F4C81'}
            backgroundColor={'#F9F6EC'}
            arrowColor={'blue'}
            arrowPadding={'10px'}
            hoverBgColor={'#0F4C81'}
          />
        </div>
        <div className="column text-center imgWrapper column relative">
          <img
            className="img"
            src={'/images/hero-2.png'}
            alt="Kristen Hodges"
          />
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
