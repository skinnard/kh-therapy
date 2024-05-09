import React from 'react'
import './resources.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import ArrowRight from '../../../svg/arrow-right-blue.svg'
import '../../../styles/style.scss'

export default () => (
  <section id="resoucres" className="sectionPadding-sm resourcesWrapper">
    <InnerContainer size={'medium'}>
      {/* <p className="pre-title text-center">OUR PARTNERS</p>
      <h3 className="text-center title">Learn More About Resources</h3> */}
      <p>
        My services are covered by most extended health benefits plans. Please
        double check with your provider before we meet to confirm that this is
        the case for you. The fee is paid directly to me and once you submit
        your official receipt, payment will be reimbursed by your insurance
        provider.
      </p>
      <p>
        <i>
          I strongly believe that finances should not be a barrier to support.
          While I don’t have a formal sliding scale, I am always open to
          discussing a fee adjustment based on financial need. Please let me
          know if this applies to you and I’ll do my best to accommodate.
        </i>
      </p>
    </InnerContainer>
  </section>
)
