import React, { Component } from 'react';
import RedirectApp from './containers/CaseStudies/RedirectApp';
import RunGo from './containers/CaseStudies/RunGo';
import ZCircle from './containers/CaseStudies/ZCircle';
import CMS from './containers/CaseStudies/CMS';
import Nineteen93 from './containers/CaseStudies/Nineteen93';
import About from './containers/AboutPage';
import Home from './containers/Home/HomePage/HomePage';
import ScrollToTop from './components/ScrollToTop';
import NavItem from './components/Nav/NavItem';
import logo from './logo.png';
import 'animate.css/animate.css';

// FONT AWESOME
import { FaMobileAlt, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
///////////////

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from "react-router-dom";

// create a class 
export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
        dark: false,
        checked: false
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  // on checkbox toggle, set the dark state to true which is changing the theme from theme--default to theme--dark, and set the checkbox state to true which is setting the value of the checkbox to 'checked' and putting the toggle button in the correct position
  changeTheme() {
      this.setState({ dark: !this.state.dark, checked: !this.state.checked });
  }

  // on DOM load, if night time, set theme to dark and checkbox to checked
  componentDidMount() {
    const hour = new Date().getHours();
    const night = hour < 6 || hour >= 19;

    if (night) {
      this.setState({ dark: !this.state.dark, checked: !this.state.checked });
      console.log(this.state.checked)
    } 
    // else {
    //   this.setState({ dark: this.state.dark, checked: !this.state.checked });
    // }
  }

  componentDidUpdate() {
    console.log("it updated");
  }

  render() {
    return (
      <HashRouter>
      <div>
        <div id="themeToggle" className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
          <div className='base'>
          {/* onUpdate={() => window.scrollTo(0, 0)} */}
              <Router >
                <header className="row header">
                  {/* <FontAwesome */}
                <div className="col-lg-6 col-sm-6 sideHeader">
                    <Link to="/"><img src={logo} alt="Michelle Vettese Design & Development Logo" className="logo" /></Link>

                    {/* theme toggle  */}
                    <div className="toggle-button-cover" onChange={this.changeTheme} >
                      <div className="button-cover">
                        <div className="button r" id="button-2">
                          <input type="checkbox" className="checkbox" checked={this.state.checked} />
                          <div className="knobs"></div>
                          <div className="layer"></div>
                        </div>
                      </div>
                    </div>
                    {/* theme toggle */}

                  </div>
                  <nav className="col-lg-6 col-sm-6">
                    <NavItem></NavItem>
                  </nav>
                </header>
                  <ScrollToTop/>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/redirect" component={RedirectApp} />
                  <Route path="/rungo" component={RunGo} />
                  <Route path="/zcircle" component={ZCircle} />
                  <Route path="/cms" component={CMS} />
                  <Route path="/nineteen93" component={Nineteen93} />
                </Router>   
          </div> 
        </div>
      </div>
      </HashRouter>
    );
  }
}

