import React from 'react'
import style from './cta.scss'
import Divider from '../../shared/Divider/Divider'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Button from '../../shared/Button/Button'
import { Link } from 'gatsby'

export default () => (
  <section id="info-section" className="sectionPadding infoSection cta-section">
    <InnerContainer size={'large'}>
      <div className="contentWrapper">
        <div className="formOutline"></div>
        <h2 className="title">When you&rsquo;re ready, I&rsquo;m here.</h2>
        <p className="bodyText">
          Feel free to contact me by phone, email, or by clicking the link
          below. I&rsquo;ll get back to you as soon as possible to discuss
          availability and next steps.
        </p>
        <Button
          btnText={'Connect'}
          link={'/contact'}
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
