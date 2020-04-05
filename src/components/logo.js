import React from 'react';
import { Link } from 'gatsby';
import LogoImg from '../svg/logo.svg';

console.log(LogoImg);

export default () => (
  <div className="logo-wrapper">
    <img src={LogoImg} alt="logo" />
  </div>
)

