import React from 'react'
import './hero.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="hero" className="heroWrapper">
    <InnerContainer>
      <div className="flex columns">
        <div className="flex-item text-center column">
          <h1 className="text-5xl leading-tight">
            If you&rsquo;re facing challenges and need some support, I&rsquo;m
            here for you.
          </h1>
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
        <div className="column text-center imgWrapper column">
          <img
            className="img"
            src={'/images/leaf-and-books.png'}
            alt="A stack of books"
          />
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
