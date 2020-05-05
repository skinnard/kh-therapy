import React from 'react'
import style from './contactInfo.module.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import Button from '../../shared/Button/Button'

export default () => (
  <section id="contactInfo" className={style.contactInfoWrapper}>
    <InnerContainer>
      <div className={`flex ${style.columns}`}>
        <div className={`flex-item text-center ${style.column}`}>
          <h1 className={style.title}>Contact</h1>
          <div className={style.infoWrapper}>
            <table>
              <tr>
                <td className={style.left} valign="top">Address:</td>
                <td className={style.right} valign="top">123 Awesome St. Hamilton, ON</td>
              </tr>
              <tr>
                <td className={style.left} valign="top">Phone:</td>
                <td className={style.right} valign="top">123-456-7890</td>
              </tr>
              <tr>
                <td className={style.left} valign="top">Email:</td>
                <td className={style.right} valign="top">kristen@hodges.com</td>
              </tr>
            </table>

            {/* <div className={style.left}>
              <p className="address">Address:</p>
              <p className="phone">Phone:</p>
              <p className="email">Email:</p>
            </div>
            <div className={style.right}>
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
              />
            </div>
          </div>
        </div>

        <div className={`${style.mapWrapper} ${style.column}`}>
          <div className={style.map}>
            <div className={style.mapBg}></div>
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
