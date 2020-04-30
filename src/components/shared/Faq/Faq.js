import React, { useState, useRef } from 'react'
import style from './faq.scss'
import InnerContainer from '../InnerContainer/InnerContainer'
import Chevron from '../../../svg/Chevron'

function Faq(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <div id="faq" className="faqWrapper">
      <InnerContainer size={'medium'}>
        <div className="faq">
          <div className={`faqHeader ${setActive}`} onClick={toggleAccordion}>
            {props.title}
            <Chevron className={`${setRotate}`} width={20} fill={"#777"} />
          </div>

          <div
            className={`faqBody`}
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
          >
            <p>{props.content}</p>
          </div>
        </div>
      </InnerContainer>
    </div>
  )
}

export default Faq
