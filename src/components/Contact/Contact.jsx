import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import './Contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  render() {
    return(
      <div className="Contact">
        <form id="contact-form">
          <input type="hidden" name="contact_number"/>
          <label>Name</label>
          <input type="text" name="user_name"/>
          <label>Email</label>
          <input type="email" name="user_email"/>
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>

    )
  }
}

export default Contact;
