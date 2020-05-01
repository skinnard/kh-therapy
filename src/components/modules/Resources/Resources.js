import React from 'react'
import style from './resources.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import ArrowRight from '../../../svg/arrow-right-blue.svg';
import '../../../styles/style.scss';

export default () => (
  <section id="resoucres" className={`sectionPadding-sm ${style.resourcesWrapper}`}>
    <InnerContainer>
      <p className="pre-title text-center">OUR PARTNERS</p>
      <h3 className={`text-center ${style.title}`}>Learn More About Resources</h3>
      <div className={style.gridWrapper}>
        <div className={style.gridItem}>
            <h5 className={style.itemTitle}>OAMFT</h5>
            
            <div className={style.imgWrapper}>
                <img src={'/images/oamft.png'} alt="OAFMT logo" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aspernatur.</p>

            <div className={style.btnWrapper}>
                <a href="#">Learn More <ArrowRight /></a>
            </div>
        </div>
        <div className={style.gridItem}>
            <h5 className={style.itemTitle}>AAMFT</h5>
            
            <div className={style.imgWrapper}>
                <img src={'/images/aamft.png'} alt="AAFMT logo" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quis nesciunt provident, consequuntur non.</p>

            <div className={style.btnWrapper}>
                <a href="#">Learn More <ArrowRight /></a>
            </div>
        </div> 
       
      </div>
    </InnerContainer>
  </section>
)
