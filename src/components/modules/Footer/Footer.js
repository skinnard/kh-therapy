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
    <section className={`sectionPadding-sm ${style.footer}`}>
      <InnerContainer>
        <div className="flex">
          <div className="flex-item">
            <Logo color={'white'} width={'275px'} height={'35px'} />
            <Creds fontSize={'12px'} color={'#ffffff'} marginBottom={'20px'} />
            <Copyright />
          </div>
          <div className="flex-item">
            <div className={style.menuWrapper}>
              <Link to="/">About</Link>
              <Link to="/">Services</Link>
              <Link to="/">Contact</Link>
              <Link to="/">LEgal</Link>
            </div>
          </div>
          <div className="flex-item">
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
                borderColor={'#fff'}
                textColor={'#fff'}
                backgroundColor={'transparent'}
                arrowColor={'white'}
                arrowPadding={'10px'}
              />
            </div>
          </div>
        </div>
      </InnerContainer>
    </section>
  )
}

export default Footer
