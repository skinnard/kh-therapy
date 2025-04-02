import React from 'react'
import './about.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

export default () => (
  <section id="about" className="sectionPadding-top aboutWrapper">
    <InnerContainer classes="mt-[80px]">
      <h1 className="title">About Me</h1>
      <div className="columns">
        <div className="column left">
          <div className="shape"></div>
          <div className="textWrapper">
            <h1 className="text-title">My Approach</h1>
            <p>
              I believe in a holistic approach to therapy that helps you develop
              a compassionate relationship with yourself and others. In my work,
              I draw primarily from Internal Family Systems Therapy, Emotion
              Focused Therapy, Focusing, and Mindfulness. Each of these models
              helps you build access to your inherent inner resources to find
              balance within yourself and your&nbsp;relationships.
            </p>
          </div>
        </div>
        <div className="column right">
          <div className="imgWrapper">
            <img
              className="img"
              src={'/images/TCSpring2024-425-Edit-2-min.jpg'}
              alt="Kristen Hodges"
            />
            <div className="imgBg"></div>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
