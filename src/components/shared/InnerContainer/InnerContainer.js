import React from 'react';
import style from './InnerContainer.module.scss';

export default ({ children }) => (
  <div className={style.innerContainer}>
      {children}
  </div>
)
