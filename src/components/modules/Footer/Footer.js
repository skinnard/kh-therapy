import React from 'react'
import Button from '../../shared/Button/Button'
import style from './footer.module.scss'
import Logo from '../../shared/Logo/Logo'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Creds from '../../shared/Creds/Creds';

function Footer() {
  return (
    <section className={style.footer}>
      <InnerContainer>
        <Logo color={'white'} width={'275px'} height={'35px'} />
        <Creds fontSize={'12px'} color={'#ffffff'} marginBottom={'30px'} />
        <Button
          borderColor={'#fff'}
          textColor={'#fff'}
          backgroundColor={'transparent'}
          arrowColor={'white'}
          arrowPadding={'10px'}
        />
      </InnerContainer>
    </section>
  )
}

export default Footer
