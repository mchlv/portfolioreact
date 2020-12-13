import React, { Component } from 'react';
import './AboutPage.css';
import HeroItem from '../../components/Hero/HeroItem';
import ListView from '../../components/List/ListView';
import GridView from '../../components/Grid/GridView';
import Footer from '../../components/Footer/Footer';


class AboutPage extends Component {

  render() {
    return (
      <div className="mainContainer">
      <section className="container-fluid aboveTheFold">
        <div className="row about justify-content-center">
          <div className="col-lg-5 heroImg">
            <img src="assets/miche.png" />
          </div>
          <div className="col-lg-3 aboutHeroTxt">
            <h1>I look to the outside world to stimulate my curiosity, and take inspiration from my everyday experiences.</h1>
            {/* <div className="heroLine line"></div> */}
            <img src="assets/miche.png" />
          </div>
        </div>
      </section>

      <section className="container technicalLogos">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12 codeLogos">
              {/* code */}
              <span className="1_html"><img src="assets/i_html_dark"  className="1_html"/></span>
              <span className="1_css"><img src="assets/i_css_dark" className="1_css"/></span>
               <span className="1_sass"><img src="assets/i_sass_dark" className="1_sass"/></span>
               <span className="1_js"><img src="assets/i_js_dark" className="1_js"/></span>
               <span className="1_react"><img src="assets/i_react_dark" className="1_react"/></span>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12 adobeLogos">
              {/* design */}
              <span><img src="assets/i_xd_dark.png" className="1_xd"/></span>
              <img src="assets/i_ai_dark.png" className="1_ai"/>
              <img src="assets/i_ps_dark.png" className="1_ps"/>
              <img src="assets/i_ae_dark.png" className="1_ae"/>
              <img src="assets/i_lr_dark.png" className="1_lr"/>
              <img src="assets/i_id_dark.png" className="1_id"/>
            </div>
          </div>
      </section>

      <section className="container-fluid aboutContent">
        <div class="row justify-content-center">
          {/* <div class="col-lg-3 aboutImg">
            <img src="assets/miche.png" />
          </div> */}
          <div class="col-lg-3 aboutBio">
            <p>Hi! My name is Michelle. I'm a designer & developer living in Vancouver, BC. Originally from Toronto, I decided to shift my life over the west coast in search of crisp air and a mountain view. I was not disappointed. I studied design and development at Vancouver Institute of Media Arts. Since then, I've fallen in love with the concept of good design, and what it takes to create a functional yet beautiful product.</p>
              
            <p>My love for UX research and design is ever growing. I'm constantly in search of a new challenge. I have experience working as a UX/UI Designer with a Vancouver startup, as well as freelancing as a Web Designer & Developer. I'd love to chat about bringing your ideas to life, so feel free to drop me a line.</p>
          </div>
          <div class="col-lg-4 sideBar">
            <ul>
              <li>Expertise</li>
              <li>UX Research & Design</li>
              <li>Front End Development</li>
              <li>Mobile Interface Design</li>
              <li>Branding</li>
              <li>Logo Design</li>
            </ul>
            <ul>
            <li>Things I Love</li>
              <li>Symmetry</li>
              <li>Hiking & camping</li>
              <li>Cooking for loved ones</li>
              <li>A good challenge</li>
              <li>Creating</li>
              <li>Matcha lattes</li>
            </ul>
            <ul>
            {/* <li>Where To Find Me</li> */}
              {/* <li>Github</li> */}
              {/* <li>Instagram</li> */}
              {/* <li>LinkedIn</li> */}
            </ul>
          </div>
        </div>
      </section>      
{/* 
      <section class="container aboutFooter">
        <div class="row justify-content-center">
          <div class="col-lg-1">
            <h2>Get in touch</h2>
          </div>
        </div>
      </section> */}

      <Footer></Footer>
</div>
    );
  }
}

export default AboutPage;