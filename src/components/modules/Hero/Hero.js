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
            src={'/images/hero-illustration.png'}
            alt="Kristen Hodges"
          />
          <div className='blob'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#ffffff"
                d="M30.1,-52.4C39,-46.9,46.3,-38.9,53.4,-29.8C60.5,-20.6,67.4,-10.3,68.8,0.8C70.2,11.9,66,23.8,59.6,34.1C53.1,44.4,44.4,53.1,34.1,56.8C23.8,60.6,11.9,59.5,-0.3,60C-12.5,60.5,-25,62.8,-34,58.3C-42.9,53.7,-48.3,42.3,-52.5,31.5C-56.6,20.6,-59.6,10.3,-62.8,-1.8C-65.9,-14,-69.3,-27.9,-64,-36.9C-58.7,-45.8,-44.8,-49.7,-32.7,-53.3C-20.6,-56.9,-10.3,-60.4,0.1,-60.6C10.6,-60.8,21.1,-57.8,30.1,-52.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          {/*<div className="imgBg"></div> */}
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
