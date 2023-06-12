import React from 'react'
import './resourcesIntro.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

export default () => (
  <section id="resources-intro" className="resourcesIntroWrapper">
    <InnerContainer>
      <div className="sectionPadding-top">
        <h1 className="title">Resources</h1>
        <div class="contentWrapper">
          <div className="shape"></div>
          <div class="textWrapper">
            <p className="subTitle">Why Therapy?</p>
            <p>
              Choosing whether to pursue therapy can bring up many questions
              within us. “Do I really need therapy?” “Are my problems and
              experiences even worth talking about?” We can often feel insecure,
              embarrassed, and even a little afraid to enter into therapy.
            </p>

            <p>
              With this in mind, I not only validate these concerns, but I
              encourage you all the more to reach out despite these feelings as
              often time these emotions are indicative of how therapy can
              actually be helpful for us. For some, it may be their first time
              exploring therapy as an option.
            </p>

            <p>My hope is that you feel supported in our work together.</p>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
