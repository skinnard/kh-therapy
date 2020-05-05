import React, { Component } from 'react'
import style from './contactForm.module.scss'
import '../../../styles/style.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Button from '../../shared/Button/Button'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className={`sectionPadding-both ${style.contactForm}`}>
        <InnerContainer size={'small'}>
          <h3 className={style.title}>Contact Kristen</h3>
          <div className={style.formWrapper}>
            <div className={style.formOutline}></div>
            <form
              id="contact-form"
              className={style.form}
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className={style.leftCol}>
                <div className="form-group">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className={style.rightCol}>
                <div className="form-group">
                  {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className={style.bottom}>
                <div className="form-group">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>

                <Button
                  btnText={'Submit'}
                  link={'false'}
                  type={'submit'}
                  borderColor={'#0F4C81'}
                  textColor={'#fff'}
                  backgroundColor={'#0F4C81'}
                  arrowColor={'#0F4C81'}
                  arrowPadding={'10px'}
                  hoverBgColor={'#DB6B5C'}
                  alignment={'center'}
                />
              </div>
            </form>
          </div>
        </InnerContainer>
        <InnerContainer size={'medium'}>
          <p className={style.formLegal}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            itaque ipsam labore repellendus exercitationem obcaecati minima,
            expedita aliquam, facere porro ullam ipsum quod quia deleniti veniam
            laboriosam modi dicta voluptate.
          </p>
        </InnerContainer>
      </div>
    )
  }
}

export default ContactForm
