import React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo/Logo';
import Creds from '../Creds/Creds';
import style from './Navigation.module.scss';

export default () => (
  <nav className={style.Nav} role="navigation">
    <div className="logo-wrapper">
      <Logo />
      <Creds />
    </div>
    <div className="flex">
      <Link to="/blog">blog</Link>
      <Link className="pl-8" to="/blog">blog</Link>
      <Link className="pl-8" to="/blog">blog</Link>
    </div>
  </nav>
)
