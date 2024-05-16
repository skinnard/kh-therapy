import React from 'react'
import './info.scss'
import '../../../styles/style.scss'
import Rings from '../../../svg/rings.svg'
import Cross from '../../../svg/cross.svg'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

export default () => (
  <section id="info-section" className="sectionPadding-both infoSection">
    <InnerContainer size={'small'}>
      <div className="text-center">
        <h2 className="text">
          Reaching out to a therapist can be intimidating
        </h2>
        <p>
          I’ll do my best to help you feel as comfortable as possible as you get
          started on the&nbsp;journey.
        </p>
        <Rings />
        <p className="issues">
          Some of the many issues I can help with include:
        </p>
        <div className="issues-list-wrapper">
          <ul className="issues-list">
            <li>Anxiety</li>
            <li>Depression</li>
            <li>Relationship</li>
            <li>Self-esteem</li>
            <li>trauma</li>
            <li>Burnout</li>
            <li>Grief and Loss</li>
            <li>Major life transitions</li>
            <li>Chronic illness</li>
            <li>Work issues</li>
          </ul>
        </div>
      </div>
    </InnerContainer>
  </section>
)
