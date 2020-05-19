import React from 'react'
import style from './hero.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'


const Hero = ({homeData}) => {
  return (
  <section id="hero" className={style.heroWrapper}>
    <InnerContainer>
      <div className={`flex ${style.columns}`}>
        <div className={`flex-item text-center ${style.column}`}>
  <h1 className={style.title}>{homeData.section_1_title[0].text}</h1>
          <p className={style.bodyText}>{homeData.hero_text[0].text}
          </p>
          <Button
            btnText={homeData.section_1_button_text[0].text}
            link={homeData.section_1_button_link[0].text}
            // type={''}
            borderColor={'#0F4C81'}
            textColor={'#0F4C81'}
            backgroundColor={'#F9F6EC'}
            arrowColor={'blue'}
            arrowPadding={'10px'}
            hoverBgColor={'#0F4C81'}
          />
        </div>
        <div
          className={`column text-center ${style.imgWrapper} ${style.column}`}
        >
          <img
            className={style.img}
            src={homeData.section_1_image.url}
            alt={homeData.section_1_image.alt}
          />
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
  }

export default Hero;