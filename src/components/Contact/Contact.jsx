import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import './Contact.css';

class Contact extends Component {
  constructor(){
  super()
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {
    name: '',
    email: '',
    message: '',
  }
}

  handleSubmit(e) {
    e.preventDefault()
    let templateParams = {
      user_name: this.state.name,
      user_email: this.state.email,
      to_name: 'aidanbell0182@gmail.com',
      message_html: this.state.message,
     }

     emailjs.send(
      'gmail',
      'template_jC7fwm3J',
      templateParams,
      'user_tMfTtjPeLJAh9Jjr5Vcex'
    )
     this.resetForm()
   }

   resetForm() {
      this.setState({
        name: '',
        email: '',
        message: '',
      })
    }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render() {
    return(
      <div className="Contact">
        <div className="contact-form">
          <form id="contact-form" onSubmit={this.handleSubmit}>
            <h3>Get in touch!</h3>
            <div class="form-row">
              <label>Name</label>
              <input class="form-control" type="text" id="name"name="name" value={this.state.name} onChange={this.handleChange}/>
              <label>Email</label>
              <input class="form-control" type="email" id ="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div class="form-row">
              <label>Message</label>
              <textarea class="form-control-lg form-control" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
            </div>
            <input class="btn btn-outline-dark" type="submit" value="Send"/>
          </form>
        </div>
      </div>

    )
  }
}

export default Contact;
