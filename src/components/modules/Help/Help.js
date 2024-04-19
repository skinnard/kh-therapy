import React from 'react'
import './help.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import ArrowRight from '../../../svg/arrow-right-blue.svg'
import '../../../styles/style.scss'

const Help = () => {
  return (
    <section id="help" className="sectionPadding-sm helpWrapper">
      <InnerContainer>
        <p className="pre-title text-center">Nurture Your Emotional Health</p>
        <h3 className="text-center title">How can I help?</h3>
        <div className="gridWrapper">
          <div className="gridItem">
            <h5 className="itemTitle">Individual Therapy</h5>
            <div className="btnWrapper">
              <a href="#">
                <span>Learn More</span> <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Couple Therapy</h5>
            <div className="btnWrapper">
              <a href="#">
                <span>Learn More</span> <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Family Therapy</h5>
            <div className="btnWrapper">
              <a href="#">
                <span>Learn More</span> <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Online Therapy</h5>
            <div className="btnWrapper">
              <a href="#">
                <span>Learn More</span> <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Discernment Counselling</h5>
            <div className="btnWrapper">
              <a href="#">
                <span>Learn More</span> <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Clinical Supervision</h5>
            <div className="btnWrapper">
              <a href="#">
                <span>Learn More</span> <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </InnerContainer>
    </section>
  )
}

export default Help
