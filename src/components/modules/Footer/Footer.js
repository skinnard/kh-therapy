import React from 'react'
import Button from '../../shared/Button/Button'
import style from './footer.module.scss'
import Logo from '../../shared/Logo/Logo'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Creds from '../../shared/Creds/Creds'
import Copyright from '../../shared/Copyright/Copyright'
import { Link } from 'gatsby'

function Footer() {
  return (
    <section className={`sectionPadding-both ${style.footer}`}>
      <InnerContainer>
        <div className={style.flex}>
          <div className={style.flexItem}>
            <div className={style.colWrap}>
              <div className={style.imgWrapper}>
                <img src={'/images/logo-white.svg'} alt="Logo" />
              </div>
              <Creds
                fontSize={'12px'}
                color={'#ffffff'}
                marginBottom={'20px'}
              />
              <Copyright />
            </div>
          </div>
          <div className={style.flexItem}>
            <div className={style.colWrap}>
              <div className={style.menuWrapper}>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/legal">Legal</Link>
              </div>
            </div>
          </div>
          <div className={style.flexItem}>
            <div className={style.colWrap}>
              <div className={style.contactWrapper}>
                <p className={style.address}>
                  123 Awesome St.
                  <br />
                  Hamilton, ON.
                </p>
                <a className={style.phone} href="#">
                  123-333-3333
                </a>
                <Button
                  btnText={'Contact'}
                  link={'/contact'}
                  type={'standard'}
                  borderColor={'#fff'}
                  textColor={'#fff'}
                  backgroundColor={'#0F4C81'}
                  arrowColor={'#0F4C81'}
                  arrowPadding={'10px'}
                  hoverBgColor={'#fff'}
                />
              </div>
            </div>
          </div>
        </div>
      </InnerContainer>
    </section>
  )
}

export default Footer
