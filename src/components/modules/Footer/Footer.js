import React from 'react'
import Button from '../../shared/Button/Button'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import './footer.scss'
import Creds from '../../shared/Creds/Creds'
import Copyright from '../../shared/Copyright/Copyright'
import { Link } from 'gatsby'

function Footer() {
  return (
    <section className="sectionPadding-both bg-blue mt-5 px-5">
      <InnerContainer>
        <div className="flex justify-center flex-wrap sm:flex-wrap">
          <div className="w-1/3 flex justify-center">
            <div class="text-left">
              <div>
                <img
                  className="w-[300px]"
                  src={'/images/logo-white.svg'}
                  alt="Logo"
                />
              </div>
              <Creds
                fontSize={'12px'}
                color={'#ffffff'}
                marginBottom={'20px'}
              />
              <Copyright />
            </div>
          </div>

          <div className="w-1/3 flex justify-center">
            <div className="flex flex-col">
              <Link
                className="text-white opacity-80 hover:opacity-100 hover:text-white mb-4"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-white opacity-80 hover:opacity-100 hover:text-white mb-4"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="text-white opacity-80 hover:opacity-100 hover:text-white mb-4"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-white opacity-80 hover:opacity-100 hover:text-white mb-4"
                to="/legal"
              >
                Legal
              </Link>
            </div>
          </div>

          <div className="w-1/3 flex justify-center">
            <div className="w-/3 flex justify-center">
              <div className="flex flex-col">
                <p className="block text-white font-semibold text-sm mb-6 opacity-80">
                  123 Awesome St.
                  <br />
                  Hamilton, ON.
                </p>
                <a
                  className="block text-white font-semibold text-sm mb-6 opacity-80"
                  href="#"
                >
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
