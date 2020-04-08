import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/shared/Layout/Layout';
import Navigation from '../components/modules/Navigation/Navigation';
import Container from '../components/shared/Container/Container';
import Hero from '../components/modules/Hero/Hero';
import Info from '../components/modules/Info/Info';

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
       <Container>
          <Helmet />
          {/* <Hero data={author.node} /> */}

          <Navigation />
          <Hero />
          <Info />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex;
