import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Footer from '../components/modules/Footer/Footer'
import ResourcesIntro from '../components/modules/ResourcesIntro/ResourcesIntro'
import Resources from '../components/modules/Resources/Resources'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          <Navigation />
          <ResourcesIntro />
          <Resources />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
