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
            <p>
              Just put your name and an email where I can reach you, and a little message to say "Hey"! I'll
              do my best to get back to you as soon as I can! Thanks!
            </p>
            <div class="form-row">
              <label>Name</label>
              <input class="form-control" type="text" id="name"name="name" value={this.state.name} onChange={this.handleChange}/>
              <label>Email</label>
              <input class="form-control" type="email" id ="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div class="form-row">
              <label>Message</label>
              <textarea class="form-control" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
            </div>
            <input class="btn btn-outline-dark" type="submit" value="Send"/>
          </form>
        </div>
        <div className="contact-links">
          <div className="links">
            <h3>Find me elsewhere!</h3>
            <div class="icons">
              <a href="https://github.com/aidanbell/"><img alt="github logo" class="link-icon" src="/github.svg"></img></a>
              <a href="https://linkedin.com/in/aidanbell0/"><img alt="linkedin logo" class="link-icon" src="/linkedin.svg"></img></a>
            </div>
          </div>
          <div className="resume">
            <h3>Skip the middleman, and download my Resume!</h3>
            <a href="/Aidan_Bell.pdf" download><img class="img-fluid" src="/resume_thumb.png" alt="Download my resume"></img></a>
          </div>
        </div>
      </div>

    )
  }
}

export default Contact;
