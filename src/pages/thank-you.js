import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Footer from '../components/modules/Footer/Footer'
import ThankYouContent from '../components/modules/ThankYouContent/ThankYouContent'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          <Navigation />
            <ThankYouContent />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
