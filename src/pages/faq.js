import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Footer from '../components/modules/Footer/Footer'
import FaqIntro from '../components/modules/FaqIntro/FaqIntro'
import FaqFaq from '../components/modules/FaqFaq/FaqFaq'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          <Navigation />
          <FaqIntro />
          <FaqFaq />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
