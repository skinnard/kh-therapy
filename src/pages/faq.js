import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Footer from '../components/modules/Footer/Footer'
import FaqIntro from '../components/modules/FaqIntro/FaqIntro'
import WhatToExpect from '../components/modules/WhatToExpect/WhatToExpect'
import FaqFaq from '../components/modules/FaqFaq/FaqFaq'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          <Navigation />
          <FaqIntro />
          <WhatToExpect />
          <FaqFaq />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
