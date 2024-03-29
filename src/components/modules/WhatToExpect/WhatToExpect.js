import React from 'react'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import './whatToExpect.scss'

const WhatToExpect = () => {
  return (
    <section
      id="what-to-expect"
      className="sectionPadding-both whatToExpectWrapper"
    >
      <InnerContainer>
        <p className="title">What to expect</p>
        <div className="flex">
          <div className="left">
            <p className="number">1.</p>
          </div>
          <div className="right">
            <p className="text">
              We&rsquo;ll start with a brief phone conversation so that I can
              get a sense of the kind of support that you are looking for.
              I&rsquo;ll ask for some basic information to get to know you and
              also use this time to answer any questions that you might have. If
              it feels like we are a good fit for working together, we will
              schedule an in-person appointment.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="left">
            <p className="number">2.</p>
          </div>
          <div className="right">
            <p className="text">
              In the first few sessions, I will learn more about you and
              together, we will explore the goals you have for therapy. Do you
              want to build healthier relationships? Learn how to better manage
              emotions and stress? Or even identifying patterns that keep us
              feeling "stuck" in our lives.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="left">
            <p className="number">3.</p>
          </div>
          <div className="right">
            <p className="text">
              The length and number of sessions will differ depending on your
              goals and needs for therapy. For some, a handful of sessions to
              address an acute issue will be enough, versus, others may need
              consistent, weekly sessions for months or years depending on their
              needs. We can discuss this in further detail to ensure you are
              receiving the support that you are looking for.
            </p>
          </div>
        </div>
      </InnerContainer>
    </section>
  )
}

export default WhatToExpect
