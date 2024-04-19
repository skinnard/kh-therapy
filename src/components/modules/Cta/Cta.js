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
        <h2 className="title">When you're ready, I'm here.</h2>
        <p className="bodyText">
          Deciding to make that first contact with a therapist can be an
          intimidating and often overwhelming prospect. When you’re ready to
          reach out, I’ll do my best to help you feel as comfortable as
          possible.
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
