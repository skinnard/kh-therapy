import React from 'react'
import './resources.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import ArrowRight from '../../../svg/arrow-right-blue.svg'
import '../../../styles/style.scss'

export default () => (
  <section id="resoucres" className="sectionPadding-sm resourcesWrapper">
    <InnerContainer>
      <p className="pre-title text-center">OUR PARTNERS</p>
      <h3 className="text-center title">Learn More About Resources</h3>
      <div className="gridWrapper">
        <div className="gridItem">
          <h5 className="itemTitle">OAMFT</h5>

          <div className="imgWrapper">
            <img src={'/images/oamft.png'} alt="OAFMT logo" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            aspernatur.
          </p>

          <div className="btnWrapper">
            <a href="#">
              Learn More <ArrowRight />
            </a>
          </div>
        </div>
        <div className="gridItem">
          <h5 className="itemTitle">AAMFT</h5>

          <div className="imgWrapper">
            <img src={'/images/aamft.png'} alt="AAFMT logo" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus quis nesciunt provident, consequuntur non.
          </p>

          <div className="btnWrapper">
            <a href="#">
              Learn More <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
