import React from 'react';
import { Link } from 'gatsby';
import LogoImg from '../../../svg/logo.svg';
import style from './logo.module.scss';

console.log(LogoImg);

export default () => (
  <div className={style.logo}>
    <Link to="/">
      <img src={LogoImg} alt="logo" />
    </Link>
  </div>
)
