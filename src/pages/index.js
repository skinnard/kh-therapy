import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import Hero from '../components/modules/Hero/Hero'
import Info from '../components/modules/Info/Info'
import Cta from '../components/modules/Cta/Cta'
import Footer from '../components/modules/Footer/Footer'
import ComingSoon from "../components/modules/ComingSoon/ComingSoon"

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet>
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9C5z1tWlsDJcpSu8QFqF8graVtsb255Q"></script>
          </Helmet>
          <Navigation />
          <Hero />
          <Info />
          <Cta />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
