import React from 'react'
import './about.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="about" className="sectionPadding-top aboutWrapper">
    <InnerContainer classes="mt-[80px]">
      <h1 className="title">Get to know Kristen</h1>
      <div className="columns">
        <div className="column left">
          <div className="shape"></div>
          <div class="textWrapper">
            <p>
              I am a Registered Psychotherapist with the College of Registered
              Psychotherapists of Ontario (CRPO) and a Registered Marriage and
              Family Therapist with the American Association for Marriage and
              Family Therapy (AAMFT). I hold a Masters degree in Counselling
              from Tyndale University College and Seminary and an honours degree
              in Psychology from the University of Guelph.
            </p>
            <p>
              I believe in a holistic approach to counselling that focuses on
              the emotional, physical, cognitive, relational, and spiritual
              well-being of my clients. I completed my training in Family
              Systems Theory, which considers each person as part of a broader
              past and present social context.{' '}
            </p>
            <p>
              Building on this foundation, I integrate many different theories
              and models into my counselling, drawing primarily on Internal
              Family Systems Therapy, Emotion Focused Therapy, Focusing, and
              Cognitive Behavioural Therapy. Each of these models helps clients
              leave behind unhelpful patterns and move toward authentic and
              healthy relationships with themselves and others.
            </p>
          </div>
        </div>
        <div className="column right">
          <div class="imgWrapper">
            <img
              className="img"
              src={'/images/kristen.png'}
              alt="Kristen Hodges"
            />
            <div className="imgBg"></div>
          </div>
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
