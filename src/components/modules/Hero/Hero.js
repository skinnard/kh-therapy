import React from 'react';
import style from './hero.module.scss';
import InnerContainer from '../../shared/InnerContainer/InnerContainer';
import "../../../styles/bulma.scss";

export default () => (
    <div id="hero" className={style.heroWrapper}>
        <InnerContainer>
            <div className="flex">
                <div class="flex-item">
                    <h1>Nurture Your Emotional Health</h1>
                </div>
                <div class="flex-item">
                    <img src={'/images/leaf-and-books.png'} alt="A stack of books" />
                </div>
            </div>
        </InnerContainer>
    </div>
)
