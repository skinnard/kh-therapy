import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container/Container';
import InnerContainer from '../InnerContainer/InnerContainer';
import Navigation from '../modules/Navigation/Navigation';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Template;
