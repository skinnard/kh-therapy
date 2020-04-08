import React from 'react';
import style from './hero.module.scss';
import InnerContainer from '../../shared/InnerContainer/InnerContainer';
import "../../../styles/bulma.scss";
import Arrow from '../../../svg/long-arrow.svg';

export default () => (
    <section id="hero" className={style.heroWrapper}>
        <InnerContainer>
            <div className="columns">
                <div class="column">
                    <h1>Nurture Your Emotional Health</h1>
                    <Arrow />
                </div>
                <div class="column">
                    <img src={'/images/leaf-and-books.png'} alt="A stack of books" />
                </div>
            </div>
        </InnerContainer>
    </section>
)
