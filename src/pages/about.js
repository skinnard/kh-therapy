import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Hero from '../components/modules/Hero/Hero'
import Info from '../components/modules/Info/Info'
import Help from '../components/modules/Help/Help'
import Cta from '../components/modules/Cta/Cta'
import Footer from '../components/modules/Footer/Footer'
import About from '../components/modules/About/About'
import AboutInfo from '../components/modules/AboutInfo/AboutInfo'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          <Navigation />
          <About />
          <AboutInfo />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
