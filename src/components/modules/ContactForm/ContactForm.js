import React, { Component } from 'react'
import style from './contactForm.module.scss'
import '../../../styles/style.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

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
          <h3 className="text-center">Contact Kristen</h3>
          <div className={style.formWrapper}>
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

              <div class={style.bottom}>
                  <div className="form-group">
                      {/* <label htmlFor="name">Name</label> */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
    
                  <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
              </div>

            </form>
          </div>
        </InnerContainer>
      </div>
    )
  }
}

export default ContactForm
