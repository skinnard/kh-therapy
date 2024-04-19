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
        {/* <h4>
          If you’re facing challenges and need some support, I’m here for you.
        </h4>*/}
        <h6 className="text">
          Deciding to make that first contact with a therapist can be an
          intimidating and often overwhelming prospect.
        </h6>
        <Rings />
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
              Burnout
            </li>
            <li>
              <Cross />
              Relationship
            </li>
            <li>
              <Cross />
              struggles
            </li>
            <li>
              <Cross />
              Unresolved
            </li>
            <li>
              <Cross />
              trauma
            </li>
            <li>
              <Cross />
              Grief
            </li>
            <li>
              <Cross />
              Loneliness
            </li>
          </ul>
        </div>
      </div>
    </InnerContainer>
  </section>
)
