import React from 'react'
import style from './cta.module.scss'
import Divider from '../../../svg/divider-line.svg'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="info-section" className={`sectionPadding ${style.infoSection}`}>
    <InnerContainer size={'small'}>
      <div className={style.contentWrapper}>
        <h2 className={style.title}>
          Trust is earned in the smallest of moments.
        </h2>
        <Divider />
        <p className={style.bodyText}>
          It is earned not through heroic deeds, or even highly visible actions,
          but through paying attention, listening, and gestures of genuine care
          and connection.
        </p>
        <Button
          btnText={'Learn More'}
          link={'./about'}
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
