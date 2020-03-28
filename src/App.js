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
        dark: false
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

    changeTheme() {
        this.setState({ dark: !this.state.dark });
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
                <div className="col-lg-6 col-sm-6 sideHeader">
                    <Link to="/"><img src={logo} alt="Michelle Vettese Design & Development Logo" className="logo" /></Link>

                    {/* theme toggle  */}
                    <div className="toggle-button-cover" onClick={this.changeTheme} >
                      <div className="button-cover">
                        <div className="button r" id="button-2">
                          <input type="checkbox" className="checkbox" />
                          <div className="knobs"></div>
                          <div className="layer"></div>
                        </div>
                      </div>
                    </div>
                    {/* theme toggle */}

                  </div>
                  <nav className="col-lg-6 col-sm-2">
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

