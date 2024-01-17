import React from 'react'
import Helmet from 'react-helmet'
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
