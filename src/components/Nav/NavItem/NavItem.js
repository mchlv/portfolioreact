import React, { Component } from 'react';
import './NavItem.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavItem extends Component {
  render() {
    return (
        <ul>
          <a href="#contact"><li><p>let's work together</p></li></a>
         <Link to="/about"><li><p>get to know me</p></li></Link>
        </ul>
    );
  }
}

export default NavItem;