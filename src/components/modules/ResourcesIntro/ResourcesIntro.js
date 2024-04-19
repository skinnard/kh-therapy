import React from 'react'
import './resourcesIntro.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

export default () => (
  <section id="resources-intro" className="resourcesIntroWrapper">
    <InnerContainer>
      <div className="sectionPadding-top">
        <h1 className="title">Rates &amp; Availability</h1>
        <div className="contentWrapper">
          <div className="shape"></div>
          <div className="textWrapper">
            {/* <p className="subTitle">Why Therapy?</p> */}
            <p>
              I see clients Tuesday, Wednesday, and Thursday from 10:30am to 4:30pm in person and by video on Fridays from 12pm am to 3:30pm.
            </p>
              
            <p><strong>60 minute therapy or supervision session: $165.00+HST</strong></p>
            
            <p>This fee is adjusted for couples or families who would like to meet for 75 or 90 minute sessions.</p>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
