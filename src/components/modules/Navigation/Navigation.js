import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../shared/Logo/Logo';
import Creds from '../../shared/Creds/Creds';
import style from './Navigation.module.scss';
import InnerContainer from '../../shared/InnerContainer/InnerContainer';

export default () => (
  <nav className={style.nav} role="navigation">
    <InnerContainer>
      <div className={style.wrapper}>
        <div className="logo-wrapper">
          <Logo />
          <Creds />
        </div>
        <div className="flex">
          <Link to="/blog">blog</Link>
          <Link className="pl-8" to="/blog">blog</Link>
          <Link className="pl-8" to="/blog">blog</Link>
        </div>
      </div>
    </InnerContainer>
  </nav>
)
