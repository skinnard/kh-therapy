import React from 'react'
import Button from '../../shared/Button/Button'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import './footer.scss'
import Creds from '../../shared/Creds/Creds'
import Copyright from '../../shared/Copyright/Copyright'
import { Link } from 'gatsby'

function Footer() {
  return (
    <section className="footer sectionPadding-both bg-blue mt-5 px-5">
      <InnerContainer>
        <div className="flex-wrapper justify-center flex-wrap sm:flex-wrap">
          <div className="footer-1 flexItem w-1/3 flex justify-center">
            <div className="text-left">
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

          <div className="footer-2 flexItem w-1/3 flex justify-center">
            <div className="flex flex-col">
              <h6 className="title">Links</h6>
              <Link
                className="link text-white hover:text-white mb-4"
                to="/about"
              >
                About
              </Link>
              <Link
                className="link text-white hover:text-white mb-4"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="link text-white hover:text-white mb-4"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="link text-white hover:text-white mb-4"
                to="/legal"
              >
                Legal
              </Link>
            </div>
          </div>

          <div className="footer-3 flexItem w-1/3 flex justify-center">
            <div className="w-/3 flex justify-center">
              <div className="contactWrapper flex flex-col">
                <h6 className="title">Info</h6>
                <a
                  href="https://maps.app.goo.gl/dNE3XmvbdjtTncHs8"
                  target="_blank"
                  className="link flex flex-start text-white font-semibold text-sm mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  3425 Harvester Rd., Suite&nbsp;213
                  <br />
                  Burlington, ON&nbsp;L7N&nbsp;3M7
                </a>
                <a
                  className="link flex flex-start text-white font-semibold text-sm mb-6"
                  href="tel:6472693436"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  1 647-269-3436
                </a>
                <a
                  className="link flex flex-start text-white font-semibold text-sm mb-6 pb-[20px]"
                  href="mailto:therapy@kristenhodges.com"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  therapy@kristenhodges.com
                </a>
                <Button
                  btnText={'Connect'}
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
