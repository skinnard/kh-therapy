import React from 'react';
import Button from '../../shared/Button/Button';
import style from './footer.module.scss';
import Logo from '../../shared/Logo/Logo';

function Footer() {
    return (
        <section className={style.footer}>
            <Logo color={'white'} />
            <Button
                borderColor={'#fff'}
                textColor={'#fff'}
                backgroundColor={'transparent'}
                arrowColor={'#fff'}
                arrowPadding={'10px'} />
        </section>
    )
}

export default Footer;
