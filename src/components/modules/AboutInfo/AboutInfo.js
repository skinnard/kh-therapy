import React from 'react'
import style from './aboutInfo.module.scss'
import '../../../styles/style.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import RightArrow from '../../../svg/arrow-right-blue.svg'

export default () => (
  <section
    id="about-info"
    className={`sectionPadding-sm ${style.aboutInfoWrapper}`}
  >
    <InnerContainer>
      <h3 className={`text-center ${style.title}`}>
        Background &amp;
        <br /> Professional Experience
      </h3>
      {/* <Arrow /> */}
      <div className={`flex ${style.columns}`}>
        <div className={`column ${style.left}`}>
          <div class={style.infoSection}>
            <p className={style.sectionTitle}>Education and work experience</p>
            <p className={style.sectionSubTitle}>
              <RightArrow />
              Licensed Marriage and Family Therapist #101250
            </p>
            <p className={style.sectionSubTitle}>
              <RightArrow />
              Richmond Area Multi-Services (RAMS):
            </p>
            <p>
              <strong>CAAP Counseling and Pre-Vocational Services</strong>
            </p>
            <p>
              Provide mental health services to individuals who may be dealing
              with drug addictions, experiencing trauma and homelessness. Link
              clients to community services and offer vocational counseling and
              assessment. Advocate and promote social justice for underserved
              populations.
            </p>
            <p className={style.sectionSubTitle}>
              <RightArrow />
              Dominican University of California
            </p>
            <p>
              <strong>
                M.A. in Counseling Psychology, emphasis in Marriage and Family
                Therapy
              </strong>
            </p>
            <p className={style.sectionSubTitle}>
              <RightArrow />
              Dominican University of California
            </p>
            <p>
              <strong>
                B.A. in Psychology, Minor in Communication Studies
              </strong>
            </p>
          </div>
        </div>
        <div className={`column ${style.right}`}>
          <div class={style.infoSection}>
            <p className={style.sectionTitle}>Training</p>
            <p className={`${style.sectionSubTitle}`}>
              <RightArrow />
              Emotionally Focused Therapy Externship
            </p>
          </div>
          <div class={style.infoSection}>
            <p className={style.sectionTitle}>PROFESSIONAL AFFILIATIONS</p>
            <p className={style.sectionSubTitle}>
              <RightArrow />
              California Association of Marriage and Family Therapists (CAMFT)
            </p>
          </div>
          <div class={style.infoSection}>
            <p className={style.sectionSubTitle}>
              <RightArrow />
              San Francisco Chapter (SFCAMFT)
            </p>
          </div>
          <div class={style.infoSection}>
            <p className={style.sectionTitle}>Languages</p>

            <p className={style.sectionSubTitle}>
              <RightArrow />
              English
            </p>
          </div>
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
