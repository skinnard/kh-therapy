import React from 'react'
import './contactInfo.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="contactInfo" className="contactInfoWrapper">
    <InnerContainer>
      <div className="flex columns">
        <div className="flex-item text-center column">
          <h1 className="title">Contact</h1>
          <p className="subtitle">
            My warm and welcoming office is located at 3425 Harvester Road,
            Suite 213, with convenient access to the highway and plenty of
            free&nbsp;parking.
          </p>
          <div className="infoWrapper">
            <table>
              <tr>
                <td className="left" valign="top">
                  Address:
                </td>
                <td className="right" valign="top">
                  <a
                    href="https://maps.app.goo.gl/dNE3XmvbdjtTncHs8"
                    target="_blank"
                  >
                    3425 Harvester Rd.,&nbsp;Suite&nbsp;213
                    <br />
                    Burlington, ON&nbsp;L7N&nbsp;3M7
                  </a>
                </td>
              </tr>
              <tr>
                <td className="left" valign="top">
                  Phone:
                </td>
                <td className="right" valign="top">
                  <a href="tel:6472693436" target="_blank">
                    1 647-269-3436
                  </a>
                </td>
              </tr>
              <tr>
                <td className="left" valign="top">
                  Email:
                </td>
                <td className="right" valign="top">
                  <a href="mailto:therapy@kristenhodges.com" target="_blank">
                    therapy@kristenhodges.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="left" valign="top">
                  For current clients looking to book a session:
                </td>
                <td className="right" valign="top">
                  <iframe
                    frameborder="0"
                    height="28"
                    scrolling="no"
                    src="https://khodges.janeapp.com/embed/book_online"
                    width="177"
                  ></iframe>
                </td>
              </tr>
            </table>
            <div className="btnWrapper">
              <Button
                btnText={'Get Directions'}
                borderColor={'#0F4C81'}
                textColor={'#0F4C81'}
                backgroundColor={'#F9F6EC'}
                hoverBgColor={'#0F4C81'}
                arrowColor={'blue'}
                arrowPadding={'10px'}
                link={'https://maps.app.goo.gl/dNE3XmvbdjtTncHs8'}
                target={'_blank'}
              />
            </div>
          </div>
        </div>

        <div className="mapWrapper column">
          <div className="map">
            <div className="mapBg"></div>
            <div class="img-wrapper">
              <a
                href="https://maps.app.goo.gl/dNE3XmvbdjtTncHs8"
                target="_blank"
              >
                <img className="img" src={'/images/map-img.png'} alt="Map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
