import React from 'react';
import style from './info.module.scss';
import '../../../styles/style.scss'
import Rings from '../../../svg/rings.svg';
import InnerContainer from '../../shared/InnerContainer/InnerContainer';

export default ({homeData}) => (
    <section id="info-section" className={`sectionPadding-both ${style.infoSection}`}>
        <InnerContainer size={'small'}>
            <div className="text-center">
                <h2>{homeData.section_2_title[0].text}</h2>
                <img
            className={style.img}
            src={homeData.section_2_icon.url}
            alt={homeData.section_2_icon.alt}
          />
                <p className={style.text}>{homeData.section_2_text[0].text}</p>
            </div>
        </InnerContainer>
    </section>
)
