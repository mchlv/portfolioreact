import React, { Component } from 'react';
import './ListView.css';
import ScrollAnimation from 'react-animate-on-scroll';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ListView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <main className="container-fluid workList">
        <section className="row justify-content-center no-gutters">
          <div className="col-lg-2 projectTitle">
            <h1>Mobile App</h1><br></br>
            <p>ReDirect</p>
          </div>
          <div className="col-lg-6">
            <img src="assets/redirectthumblarge.png" alt="" />
          </div>
          <div className="col-lg-2 blurb">
            <h1>01.</h1>
            <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
            <Link to="/redirect" style={{ textDecoration: 'none' }}> <h4>View Case Study</h4></Link>
          </div>
        </section>

        <section className="row justify-content-center  no-gutters" >
          <div className="col-lg-2 projectTitle">
            <h1>Mobile App</h1>
            <p>ZCircle</p>
          </div>
          <div className="col-lg-6">
            <img src="assets/zcirclethumblarge.png" alt="" />
          </div>
          <div className="col-lg-2 blurb">
            <h1>02.</h1>
            <p>ZCircle is a mobile shopping app concept that bridges the gap  between online shopping and ethical consumerism.</p>
            <Link to="/zcircle" style={{ textDecoration: 'none' }}><h4>View Case Study</h4></Link>
          </div>
        </section>
  
        <section className="row justify-content-center  no-gutters">
          <div className="col-lg-2 projectTitle">
            <h1>Mobile App</h1>
            <p>RunGo</p>
          </div>
          <div className="col-lg-6">
            <img src="assets/rungothumblarge.png" alt="" />
          </div>
          <div className="col-lg-2 blurb">
            <h1>03.</h1>
            <p>With RunGo's focus on community and wellness ,,,</p>
            <Link to="/rungo" style={{ textDecoration: 'none' }}><h4>View Case Study</h4></Link>
          </div>
        </section>

        <section className="row justify-content-center no-gutters">
          <div className="col-lg-2 projectTitle">
            <h1>Web App</h1>
            <p>Content Management System</p>
          </div>
          <div className="col-lg-6">
            <img src="assets/cmsthumblarge.png" alt="" />
          </div>
          <div className="col-lg-2 blurb">
            <h1>04.</h1>
            <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
            <Link to="/cms" style={{ textDecoration: 'none' }}><h4>View Case Study</h4></Link>
          </div>
        </section>
  
        <section className="row justify-content-center  no-gutters">
          <div className="col-lg-2 projectTitle">
            <h1>eCommerce</h1>
            <p>Nineteen 93</p>
          </div>
          <div className="col-lg-6">
            <img src="assets/93thumblarge.png" alt="" />
          </div>
          <div className="col-lg-2 blurb">
            <h1>05.</h1>
            <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
            <Link to="/nineteen93" style={{ textDecoration: 'none' }}><h4>View Case Study</h4></Link>
          </div>
        </section>
      </main>
    );
  }
}

export default ListView;