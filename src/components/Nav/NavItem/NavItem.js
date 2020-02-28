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
         <Link to="/about"><li><p>get to know me</p></li></Link>
          <a href="#contact"><li><p>work with me</p></li></a>
        </ul>
    );
  }
}

export default NavItem;