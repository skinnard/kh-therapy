import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import InnerContainer from './InnerContainer';
import Navigation from './navigation';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <InnerContainer>
          <Navigation />
          {children}
        </InnerContainer>
      </Container>
    )
  }
}

export default Template;
