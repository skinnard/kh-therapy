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
          Trust is earned in the smallest of moments.</h2>
        <h6>
        It is earned not through
          heroic deeds, or even highly visible actions, but through paying
          attention, listening, and gestures of genuine care and connection.
        </h6>
        <Rings />
        <p>
          Reaching out to a therapist can be intimidating, so I&rsquo;ll do my
          best to help you feel as comfortable as possible as you get started on
          the journey.
        </p>
        <p className="issues">
          Some of the many issues I can help with include:
        </p>
        <div className="issues-list-wrapper">
          <ul className="issues-list">
            <li>
              <Cross />
              Anxiety
            </li>
            <li>
              <Cross />
              Depression
            </li>
            <li>
              <Cross />
              Relationship
            </li>
            <li>
              <Cross />
              Self-esteem
            </li>
            <li>
              <Cross />
              trauma
            </li>
            <li>
              <Cross />
              Burnout
            </li>
            <li>
              <Cross />
              Grief and Loss
            </li>
            <li>
              <Cross />
              Major life transitions
            </li>
            <li>
              <Cross />
              Chronic illness
            </li>
            <li>
              <Cross />
              Work issues
            </li>
          </ul>
        </div>
      </div>
    </InnerContainer>
  </section>
)
