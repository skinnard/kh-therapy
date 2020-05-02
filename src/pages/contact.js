import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/shared/Layout/Layout'
import Navigation from '../components/modules/Navigation/Navigation'
import Container from '../components/shared/Container/Container'
import ContactInfo from '../components/modules/ContactInfo/ContactInfo'
import Footer from '../components/modules/Footer/Footer'
import ContactForm from '../components/modules/ContactForm/ContactForm'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Helmet />
          {/* <Hero data={author.node} /> */}
          <Navigation />
          <ContactInfo />
          <ContactForm />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex
