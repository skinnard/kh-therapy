import React from 'react'
import style from './thankYouContent.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="info-section" className="sectionPadding thank-you">
    <InnerContainer size={'large'}>
      <div className="contentWrapper">
        
        <h1 className="title">Thank you for reaching out</h1>
        
        <Button
          btnText={'Return Home'}
          link={'/'}
          borderColor={'#0F4C81'}
          textColor={'#0F4C81'}
          backgroundColor={'#fff'}
          hoverBgColor={'#0F4C81'}
          arrowColor={'blue'}
          arrowPadding={'10px'}
        />
      </div>
    </InnerContainer>
  </section>
)
