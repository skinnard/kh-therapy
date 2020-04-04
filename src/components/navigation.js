import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Logo from './logo';

export default () => (
  <nav role="navigation">
    <Logo />
    {/* <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul> */}
  </nav>
)
