import React, { Component } from 'react'
import Logo from '../../shared/Logo/Logo'
import Creds from '../../shared/Creds/Creds'
import './Navigation.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import DesktopMenu from '../Navigation/DesktopMenu/DesktopMenu'
import MobileMenu from '../Navigation/MobileMenu/MobileMenu'

class Navigation extends Component {
  state = {
    navBackground: null,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 80) {
        this.setState({ navBackground: null })
      } else {
        this.setState({ navBackground: 'scrolled' })
      }
    })
  }

  render() {
    let navClassName
    if (this.state.navBackground === 'scrolled') {
      navClassName = 'nav scrolled'
    } else {
      navClassName = 'nav'
    }

    return (
      <nav id="nav-wrapper" className={navClassName} role="navigation">
        <InnerContainer>
          <div className="wrapper">
            <div className="logoWrapper">
              <Logo color={'blue'} width={'200px'} height={'25px'} />
              <Creds color={'#0F4C81'} marginBottom={'0'} />
            </div>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </InnerContainer>
      </nav>
    )
  }
}

Navigation.propTypes = {}

export default Navigation
