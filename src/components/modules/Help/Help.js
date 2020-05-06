import React from 'react'
import style from './help.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import ArrowRight from '../../../svg/arrow-right-blue.svg'
import '../../../styles/style.scss'

export default () => (
  <section id="help" className={`sectionPadding-sm ${style.helpWrapper}`}>
    <InnerContainer>
      <p className="pre-title text-center">Nurture Your Emotional Health</p>
      <h3 className={`text-center ${style.title}`}>How can I help?</h3>
      <div className={style.gridWrapper}>
        <div className={style.gridItem}>
          <h5 className={style.itemTitle}>Family Therapy</h5>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <div className={style.btnWrapper}>
            <a href="#">
              Learn More <ArrowRight />
            </a>
          </div>
        </div>
        <div className={style.gridItem}>
          <h5 className={style.itemTitle}>Couples Therapy</h5>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <div className={style.btnWrapper}>
            <a href="#">
              Learn More <ArrowRight />
            </a>
          </div>
        </div>
        <div className={style.gridItem}>
          <h5 className={style.itemTitle}>Family Therapy</h5>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <div className={style.btnWrapper}>
            <a href="#">
              Learn More <ArrowRight />
            </a>
          </div>
        </div>
        <div className={style.gridItem}>
          <h5 className={style.itemTitle}>Family Therapy</h5>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <div className={style.btnWrapper}>
            <a href="#">
              Learn More <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
