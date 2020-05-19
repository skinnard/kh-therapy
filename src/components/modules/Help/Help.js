import React from 'react'
import './help.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import ArrowRight from '../../../svg/arrow-right-blue.svg'
import '../../../styles/style.scss'

const Help = ({ homeData, therapyTypes }) => {

  // console.log(therapyTypes);
  

  return (
    <section id="help" className="sectionPadding-sm helpWrapper">
      <InnerContainer>
        <p className="pre-title text-center">
          {homeData.section_3_pre_title[0].text}
        </p>
        <h3 className="text-center title">
          {homeData.section_3_title[0].text}
        </h3>
        <div className="gridWrapper">
          {therapyTypes.map(type => (
            <div className="gridItem">
              <h5 className="itemTitle">{type.node.name[0].text}</h5>
              {
              console.log('TYPE:', type.node.description)
              }

            {type.node.description.map(item => (
              <div>
              {item.text}
              </div>
            ))}


              <div className="btnWrapper">
                <a href="#">
                  Learn More <ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </InnerContainer>
    </section>
  )
}

export default Help
