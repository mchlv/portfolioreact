import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  
  render() {
    return (
      <footer className="container-fluid" id="contact">
        <section className="row justify-content-center">
          <div className="col-lg-2">
            <h3>Let's Connect</h3>
          </div>
        </section>
        <section className="row justify-content-center">
          <div className="col-lg-4">
            <a href="mailto:">mcvettese@gmail.com</a>
          </div>
          <div className="col-lg-4">
            <img src="assets/linkedin.svg" alt="LinkedIn Profile" />
            <img src="assets/ig.svg" alt="Instagram Account mchlv" />
            <img src="assets/github.svg" alt="Github Account mchlv" />
          </div>
          <div className="col-lg-4">
            <p>Vancouver, BC</p>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;