import React from 'react'
import './info.scss'
import '../../../styles/style.scss'
import Rings from '../../../svg/rings.svg'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

export default () => (
  <section id="info-section" className="sectionPadding-both infoSection">
    <InnerContainer size={'small'}>
      <div className="text-center">
        <h2>Trust is earned in the smallest of moments.</h2>
        <Rings />
        <p className="text">
          It is earned not through heroic deeds, or even highly visible actions,
          but through paying attention, listening, and gestures of genuine care
          and connection.
        </p>
      </div>
    </InnerContainer>
  </section>
)
