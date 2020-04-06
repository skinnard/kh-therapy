import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../shared/Logo/Logo';

export default () => (
  <nav className="border-solid border border-red-700 h-20 flex items-center justify-between" role="navigation">
    <Logo />

    <div className="flex">
      <Link to="/blog">blog</Link>
      <Link className="pl-8" to="/blog">blog</Link>
      <Link className="pl-8" to="/blog">blog</Link>
    </div>

  </nav>
)
