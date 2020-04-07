import React from 'react';
import style from './Container.module.scss';

export default ({ children }) => (
  <div className={style.container}>
      {children}
  </div>
)
