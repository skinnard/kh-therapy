import React, { Component } from 'react'
import './contactForm.scss'
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
      <div className="sectionPadding-both contactForm">
        <InnerContainer size={'small'}>
          <h3 className="title">Contact Kristen</h3>
          <div className="formWrapper">
            {/* <div className="formOutline"></div> */}
            <form
              id="contact-form"
              className="form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="leftCol">
                <div className="form-group">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="rightCol">
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

              <div className="bottom">
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
                  btnText={'Get Directions'}
                  borderColor={'#0F4C81'}
                  textColor={'#0F4C81'}
                  backgroundColor={'#ffffff'}
                  hoverBgColor={'#0F4C81'}
                  arrowColor={'blue'}
                  arrowPadding={'10px'}
                  link={'false'}
                  type={'submit'}
                  alignment={'center'}
                />
              </div>
            </form>
          </div>
        </InnerContainer>
      </div>
    )
  }
}

export default ContactForm
