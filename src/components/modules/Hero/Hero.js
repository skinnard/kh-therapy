import React from 'react'
import style from './hero.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="hero" className={style.heroWrapper}>
    <InnerContainer>
      <div className={`flex ${style.columns}`}>
        <div className={`flex-item text-center ${style.column}`}>
          <h1 className={style.title}>Nurture Your Emotional Health</h1>
          <p className={style.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
            finibus nisl. Vestibulum vulputate.
          </p>
          <Button
            borderColor={'#0F4C81'}
            textColor={'#0F4C81'}
            backgroundColor={'#F9F6EC'}
            hoverBgColor={'#0F4C81'}
            arrowColor={'blue'}
            arrowPadding={'10px'}
          />
        </div>
        <div className={`column text-center ${style.imgWrapper} ${style.column}`}>
          <img
            className={style.img}
            src={'/images/leaf-and-books.png'}
            alt="A stack of books"
          />
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
