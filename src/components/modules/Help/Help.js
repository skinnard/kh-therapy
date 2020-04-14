import React from 'react'
import style from './help.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import '../../../styles/bulma.scss'
import ArrowRight from '../../../svg/arrow-right.svg';

export default () => (
  <section id="help" className={style.helpWrapper}>
    <InnerContainer>
      <p className="pre-title">Nurture Your Emotional Health</p>
      <h3 className="title">How can I help?</h3>
      <div className={style.gridWrapper}>
        <div className={style.gridItem}>
            <h5 className={style.title}>Family Therapy</h5>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="btn-wrpper">
                <a href="#">Learn More<ArrowRight /></a>
            </div>
        </div>
        <div className={style.gridItem}>
            <h5 className={style.title}>Family Therapy</h5>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="btn-wrpper">
                <a href="#">Learn More<ArrowRight /></a>
            </div>
        </div>
        <div className={style.gridItem}>
            <h5 className={style.title}>Family Therapy</h5>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="btn-wrpper">
                <a href="#">Learn More<ArrowRight /></a>
            </div>
        </div>
        <div className={style.gridItem}>
            <h5 className={style.title}>Family Therapy</h5>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <div className="btn-wrpper">
                <a href="#">Learn More<ArrowRight /></a>
            </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
