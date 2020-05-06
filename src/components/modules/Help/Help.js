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
            <h5 className="itemTitle">Family Therapy</h5>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
            <div className="btnWrapper">
              <a href="#">
                Learn More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Couples Therapy</h5>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
            <div className="btnWrapper">
              <a href="#">
                Learn More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Family Therapy</h5>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
            <div className="btnWrapper">
              <a href="#">
                Learn More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="gridItem">
            <h5 className="itemTitle">Family Therapy</h5>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
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
}

export default Help
