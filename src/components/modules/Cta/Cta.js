import React from 'react';
import style from './cta.module.scss';
import Divider from '../../../svg/divider-line.svg';
import InnerContainer from '../../shared/InnerContainer/InnerContainer';

export default () => (
    <section id="info-section">
        <InnerContainer>
            <div class="column">
                <h2>Trust is earned in the smallest of moments.</h2>
                <Divider />
                <p>It is earned not through heroic deeds, or even highly visible actions, but through paying attention, listening, and gestures of genuine care and connection.</p>
            </div>
        </InnerContainer>
    </section>
)