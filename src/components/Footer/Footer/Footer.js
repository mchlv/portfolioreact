import React, { Component } from 'react';
import './Footer.css';

import emailjs from 'emailjs-com';

// import './ContactUs.css';

class Footer extends Component {

  render() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_j6f7cud', 'template_a8garih', e.target, 'user_3wZulnSZFZBT5v0FR9DUV')
        .then((result) => {
            // console.log(result.text);
            alert("message received!");
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
      <footer className="container-fluid" id="contact">
        <section className="row justify-content-center">
          <div className="col-lg-2">
          </div>
        </section>
        <section className="row justify-content-center">
   
          <div className="contact col-lg-5">

          <h3>connect with me</h3>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            {/* <label>Name</label> */}
            <input type="text" name="user_name" placeholder="Name" />
            {/* <label>Email</label> */}
            <input type="email" name="user_email"  placeholder="Email Address" />
            {/* <label>Message</label> */}
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
        
          </div>
        </section>
      </footer>
    );
  }

}
export default Footer;