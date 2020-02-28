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
    this.state = {};
  }

  render() {
    return (
      <main className="container-fluid workList">

    <section className="row justify-content-center no-gutters">
      <div className="col-lg-2 projectTitle">
        <h1>ReDirect</h1><br></br>
        <p>Mobile Application</p>
      </div>
      <div className="col-lg-6">
        <img src="assets/redirectthumblarge.png" alt="" />
      </div>
      <div className="col-lg-2 blurb">
        <h1>01.</h1>
        <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
        <Link to="/redirect">View Case Study</Link>
      </div>
    </section>

    <section className="row justify-content-center  no-gutters">
      <div className="col-lg-2 projectTitle">
        <h1>ZCircle</h1>
        <p>Mobile Application</p>
      </div>
      <div className="col-lg-6">
        <img src="assets/zcirclethumblarge.png" alt="" />
      </div>
      <div className="col-lg-2 blurb">
        <h1>02.</h1>
        <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
        <Link to="/zcircle">View Case Study</Link>
      </div>
    </section>
  

  
    <section className="row justify-content-center  no-gutters">
      <div className="col-lg-2 projectTitle">
        <h1>RunGo</h1>
        <p>Mobile Application</p>
      </div>
      <div className="col-lg-6">
        <img src="assets/rungothumblarge.png" alt="" />
      </div>
      <div className="col-lg-2 blurb">
        <h1>03.</h1>
        <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
        <Link to="/rungo">View Case Study</Link>
      </div>
    </section>
  

  
    <section className="row justify-content-center  no-gutters">
      <div className="col-lg-2 projectTitle">
        <h1>Content Management System</h1>
        <p>Web Application</p>
      </div>
      <div className="col-lg-6">
        <img src="assets/cmsthumblarge.png" alt="" />
      </div>
      <div className="col-lg-2 blurb">
        <h1>04.</h1>
        <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
        <Link to="/cms">View Case Study</Link>
      </div>
    </section>
  

  
    <section className="row justify-content-center  no-gutters">
      <div className="col-lg-2 projectTitle">
        <h1>Nineteen93</h1>
        <p>eCommerce Website</p>
      </div>
      <div className="col-lg-6">
        <img src="assets/93thumblarge.png" alt="" />
      </div>
      <div className="col-lg-2 blurb">
        <h1>05.</h1>
        <p>Here is the brief desc of the project. It will only be two sentences so choose the right words carefully.</p>
        <Link to="/nineteen93">View Case Study</Link>
      </div>
    </section>

  </main>
    );
  }
}

export default ListView;