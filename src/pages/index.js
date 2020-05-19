import React from 'react'
import { graphql } from 'gatsby'
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

class RootIndex extends React.Component {

  
  render() {   

    const homeData = this.props.data.prismic.allHome_pages.edges[0].node
    const therapyTypes = this.props.data.prismic.allTherapy_types.edges
    // console.log(therapyTypes)

    return (
      <Layout>
        <Container>
          <Helmet />
          <Navigation />
          <Hero homeData={homeData} />
          <Info homeData={homeData} />
          <Help homeData={homeData} therapyTypes={therapyTypes} />
          <Cta homeData={homeData} />
          <Footer />
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const query = graphql`
  {
    prismic {
      allHome_pages {
        edges {
          node {
            section_1_title
            hero_text
            section_1_image
            section_1_button_text
            section_1_button_link
            _linkType
            section_2_icon
            section_2_text
            section_2_title
            section_3_pre_title
            section_3_title
            section_4
            section_4_button_link
            section_4_button_text
            section_4_icon
            section_4_text
          }
        }
      }
      allTherapy_types {
        edges {
          node {
            name
            description
            _linkType
          }
        }
      }
    }
  }
`