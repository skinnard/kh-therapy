import React, { useState } from 'react'
import AccordionArrow from '../../../svg/accordion-arrow.svg'
import style from './faq.scss'
import InnerContainer from '../InnerContainer/InnerContainer'

function Faq() {
  const [isToggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!isToggled);
    // console.log(isToggled);
  }  

  const result = isToggled === true ? 'style.show' : null;
  console.log(result);

  return (
    <div id="faq" className="sectionPadding faqWrapper">
      <InnerContainer size={'medium'}>
        <div className="faq">
          <div className="faqHeader" onClick={toggle}>
            Family Therapy
            <AccordionArrow />
          </div>

          <div className="faqBody">
            Provide individuals with the space to explore emotions and personal
            experiences in order to create healthier coping skills to handle
            daily life stressors and develop tools to maintain positive
            relationships and engage in a thriving community.
          </div>
        </div>
      </InnerContainer>
    </div>
  )
}

export default Faq
