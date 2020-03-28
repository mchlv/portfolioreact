import React, { Component } from 'react';
import './GridView.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class GridView extends Component {

  render() {
    return (
      <main className="container workGrid">
  <section className="row">
    <div className="col-lg-4">
    <Link to="/redirect" style={{ textDecoration: 'none' }}>
      <img src="assets/redirecthumbsm.png" alt="" />
      <h4>ReDirect</h4>
      <p>UX / UI / PROTOTYPE</p></Link>
    </div>
    <div className="col-lg-4">
      <Link to="/zcircle" style={{ textDecoration: 'none' }}>
        <img src="assets/zcirclethumbsm.png" alt="" />
      <h4>ZCircle</h4>
      <p>UX / UI / PROTOTYPE</p></Link>
    </div>
    <div className="col-lg-4">
      <Link to="/rungo" style={{ textDecoration: 'none' }}>
        <img src="assets/rungothumbsm.png" alt="" />
      <h4>RunGo</h4>
      <p>UX / UI / PROTOTYPE</p></Link>
    </div>
  </section>

  <section className="row justify-content-center">
    <div className="col-lg-4">
      <Link to="/cms" style={{ textDecoration: 'none' }}>
         <img src="assets/cmsthumbsm.png" alt="" />
      <h4>Content Management System</h4>
      <p>Web Application Interface</p></Link>
    </div>
    <div className="col-lg-4">
      <Link to="/nineteen93" style={{ textDecoration: 'none' }}>
         <img src="assets/93thumbsm.png" alt="" />
      <h4>Nineteen93</h4>
      <p>eCommerce Website</p></Link>
    </div>
  </section>
</main>
    );
  }
}

export default GridView;