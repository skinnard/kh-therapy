import React, { Component } from 'react'
import { navigate } from "gatsby"
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
    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/thank-you/'))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <div className="sectionPadding-both contactForm">
        <InnerContainer size={'small'}>
          <h3 className="title">Contact Kristen</h3>
          <div className="formWrapper">
            <form
              id="contact-form"
              className="form"
              onSubmit={this.handleSubmit.bind(this)}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contactForm"
              method="post"
            >
              {/* Required by Netlify to attribute this AJAX submission to the form */}
              <input type="hidden" name="form-name" value="contactForm" />
              {/* Honeypot field for spam bots; hidden from humans */}
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="leftCol">
                <div className="form-group">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>

              <div className="rightCol">
                <div className="form-group">
                  {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="bottom">
                <div className="form-group">
                  {/* <label htmlFor="name">Name</label> */}
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <Button
                  btnText={'Submit'}
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
