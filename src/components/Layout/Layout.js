import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container';
import InnerContainer from '../InnerContainer';
import Navigation from '../Navigation/Navigation';

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
          <div className="content">
            {children}
          </div>
        </InnerContainer>
      </Container>
    )
  }
}

export default Template;
