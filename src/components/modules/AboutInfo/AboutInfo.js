import React from 'react'
import './aboutInfo.scss'
import '../../../styles/style.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import RightArrow from '../../../svg/arrow-right-blue.svg'

export default () => (
  <section id="about-info" className="sectionPadding-sm aboutInfoWrapper">
    <InnerContainer>
      <h3 className="text-center title">
        Background &amp;
        <br /> Professional Experience
      </h3>
      {/* <Arrow /> */}
      <div className="flex columns">
        <div className="column left">
          <div class="infoSection">
            <p className="sectionTitle">Education and work experience</p>
            <p className="sectionSubTitle">
              <RightArrow />
              Licensed Marriage and Family Therapist #101250
            </p>
            <p className="sectionSubTitle">
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
            <p className="sectionSubTitle">
              <RightArrow />
              Dominican University of California
            </p>
            <p>
              <strong>
                M.A. in Counseling Psychology, emphasis in Marriage and Family
                Therapy
              </strong>
            </p>
            <p className="sectionSubTitle">
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

        <div className="column right">
          <div class="infoSection">
            <p className="sectionTitle">Training</p>
            <p className="sectionSubTitle">
              <RightArrow />
              Emotionally Focused Therapy Externship
            </p>
          </div>
          <div class="infoSection">
            <p className="sectionTitle">PROFESSIONAL AFFILIATIONS</p>
            <p className="sectionSubTitle">
              <RightArrow />
              California Association of Marriage and Family Therapists (CAMFT)
            </p>
          </div>
          <div class="infoSection">
            <p className="sectionSubTitle">
              <RightArrow />
              San Francisco Chapter (SFCAMFT)
            </p>
          </div>
          <div class="infoSection">
            <p className="sectionTitle">Languages</p>

            <p className="sectionSubTitle">
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
