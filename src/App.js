import React, { Component } from 'react';
import Redirect from './containers/CaseStudies/Redirect';
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
  Switch,
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
      <div>
        <div id="themeToggle" className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
          <div className='base'>            
            
                <Router onUpdate={() => window.scrollTo(0, 0)}></Router>
            
                <Router>
                <header className="row header">
                  <nav className="col-lg-6 col-sm-12">
                    <NavItem></NavItem>
                    {/* <p className="darkLightToggle">Night Mode</p>  */}
                    <div class="toggle-button-cover" onClick={this.changeTheme} >
                      <div class="button-cover">
                        <div class="button r" id="button-2">
                          <input type="checkbox" class="checkbox" />
                          <div class="knobs"></div>
                          <div class="layer"></div>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <div className="col-lg-6">
                    <Link to="/index"><img src={logo} alt="Michelle Vettese Design & Development Logo" className="logo" /></Link>
                  </div>
                </header>
                  <ScrollToTop/>
                  <Route path="/index" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/redirect" component={Redirect} />
                  <Route path="/rungo" component={RunGo} />
                  <Route path="/zcircle" component={ZCircle} />
                  <Route path="/cms" component={CMS} />
                  <Route path="/nineteen93" component={Nineteen93} />
                </Router>   
          </div> 
        </div>
      </div>
      
    );
  }
}

