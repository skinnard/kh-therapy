import React from 'react'
import './contactInfo.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="contactInfo" className="contactInfoWrapper">
    <InnerContainer>
      <div className="flex columns">
        <div className="flex-item text-center column">
          <h1 className="title">Contact</h1>
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
                  <p className="instructions">Some stuff here</p>
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
            </table>

            {/* <div className="left}>
              <p className="address">Address:</p>
              <p className="phone">Phone:</p>
              <p className="email">Email:</p>
            </div>
            <div className="right}>
              <p className="address">123 Awesome St. Hamilton, ON</p>
              <p className="phone">123-456-7890</p>
              <p className="email">kristen@hodges.com</p>
            </div> */}
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
              />
            </div>
          </div>
        </div>

        <div className="mapWrapper column">
          <div className="map">
            <div className="mapBg"></div>
            <iframe
              src="https://snazzymaps.com/embed/235252"
              width="100%"
              height="400px"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </InnerContainer>
  </section>
)
