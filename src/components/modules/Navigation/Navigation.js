import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../shared/Logo/Logo'
import Creds from '../../shared/Creds/Creds'
import style from './Navigation.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

class Navigation extends Component {
  state = {
    navBackground: null,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      // const backgroundcolor = window.scrollY < 100 ? "red" : "blue";

      if (window.scrollY < 80) {
        this.setState({ navBackground: 'scrolled' })
      } else {
        this.setState({ navBackground: 'not-scrolled' })
      }
    })
  }

  render() {
    return (
      <nav className={style.nav} role="navigation">
        <InnerContainer>
          <div className={style.wrapper}>
            <div className="logo-wrapper">
              <Logo color={'blue'} width={'200px'} height={'25px'} />
              <Creds fontSize={'12px'} color={'0F4C81'} marginBottom={'0'} />
            </div>
            <div className="flex">
              <Link className={style.navLink} to="/blog">
                about
              </Link>
              <Link className={style.navLink} to="/blog">
                services
              </Link>
              <Link className={style.navLink} to="/blog">
                resources
              </Link>
              <Link className={style.navLink} to="/blog">
                contact
              </Link>
            </div>
          </div>
        </InnerContainer>
      </nav>
    )
  }
}

Navigation.propTypes = {}

export default Navigation
