import React from 'react'
import AccordionArrow from '../../../svg/accordion-arrow.svg'
import style from './faq.module.scss'
import InnerContainer from '../InnerContainer/InnerContainer'

function Faq(props) {
  return (
    <div className={style.faqWrapper}>
      <InnerContainer size={'medium'}>
        <div className={style.faq}>
          <div className={style.faqHeader}>
            Family Therapy
            <AccordionArrow />
          </div>

          <div className={style.body}>
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
