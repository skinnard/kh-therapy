import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Hero from '../components/modules/Hero/Hero'
import Info from '../components/modules/Info/Info'
import Help from '../components/modules/Help/Help'
import Cta from '../components/modules/Cta/Cta'
import Footer from '../components/modules/Footer/Footer'
import ComingSoon from "../components/modules/ComingSoon/ComingSoon"

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          <ComingSoon />
          {/* <Navigation />
          <Hero />
          <Info />
          <Help />
          <Cta />
          <Footer /> */}
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
