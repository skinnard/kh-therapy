import React from 'react'
import style from './about.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="about" className={style.aboutWrapper}>
    <InnerContainer>
      <div className={`flex sectionPadding ${style.columns}`}>
      <h3 className={style.title}>Get to know Kristen</h3>
        <div className={`column ${style.left}`}>  
          <div className={style.shape}></div>
          <div class={style.textWrapper}>
            <p>I am a Registered Psychotherapist with the College of Registered Psychotherapists of Ontario (CRPO) and a Registered Marriage and Family Therapist with the American Association for Marriage and Family Therapy (AAMFT). I hold a Masters degree in Counselling from Tyndale University College and Seminary and an honours degree in Psychology from the University of Guelph.</p><p>I believe in a holistic approach to counselling that focuses on the emotional, physical, cognitive, relational, and spiritual well-being of my clients. I completed my training in Family Systems Theory, which considers each person as part of a broader past and present social context. </p><p>Building on this foundation, I integrate many different theories and models into my counselling, drawing primarily on Internal Family Systems Therapy, Emotion Focused Therapy, Focusing, and Cognitive Behavioural Therapy. Each of these models helps clients leave behind unhelpful patterns and move toward authentic and healthy relationships with themselves and others.</p>
          </div>
        </div>
        <div className={`column ${style.right}`}>
          <div class={style.imgWrapper}>
            <img
              className={style.img}
              src={'/images/kristen.png'}
              alt="Kristen Hodges"
            />
            <div className={style.imgBg}></div>
          </div>
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
