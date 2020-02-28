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
        <div class="row about justify-content-center">
          <div class="col-lg-5 heroImg">
            <img src="assets/miche.png" />
          </div>
          <div class="col-lg-3 aboutHeroTxt">
            <h1>Here is some good info about me to impress the people.</h1>
            {/* <div className="heroLine line"></div> */}
          </div>
        </div>
      </section>

      <section class="container technicalLogos">
          <div class="row justify-content-center">
            <div class="col-lg-8 codeLogos">
              {/* code */}
              <img src="assets/html.png"/>
              <img src="assets/css.png"/>
              <img src="assets/sass.png"/>
              <img src="assets/js.png"/>
              <img src="assets/react.png"/>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-8 adobeLogos">
              {/* design */}
              <img src="assets/xd.svg"/>
              <img src="assets/ai.svg"/>
              <img src="assets/ps.svg"/>
              <img src="assets/ae.svg"/>
              <img src="assets/lightroom.svg"/>
              <img src="assets/id.svg"/>
            </div>
          </div>
      </section>

      <section class="container-fluid aboutContent">
        <div class="row justify-content-center">
          {/* <div class="col-lg-3 aboutImg">
            <img src="assets/miche.png" />
          </div> */}
          <div class="col-lg-3 aboutBio">
            <p>Hi! My name is Michelle. I'm a designer & developer living in Vancouver, BC. Originally from Toronto, I decided to shift my life over the west coast in search of crisp air and a mountain view. I was not disappointed. I studied design and development at Vancouver Institute of Media Arts. Since then, I've fallen in love with the concept of good design, and what it takes to create a functional yet beautiful product.</p>
              
            <p>My love for UX research and design is ever growing. I'm constantly in search of a new challenge and thrive under pressure. I have experience working as a UX/UI Designer with a startup, as well as freelance design and development. I'd love to meet up for a latte to chat, so feel free to drop me a line.</p>
          </div>
          <div class="col-lg-3 sideBar">
            <ul>
              <li>Expertise</li>
              <li>Front End Development</li>
              <li>UX Research & Design</li>
              <li>Mobile Interface Design</li>
              <li>Branding</li>
              <li>Logo Design</li>
              <li>Print Design</li>
            </ul>
            <ul>
            <li>Things I Love</li>
              <li>Symmetry</li>
              <li>Hiking & Camping</li>
              <li>Cooking for friends</li>
              <li>A Good Challenge</li>
              <li>Illustrating</li>
              <li>Matcha Lattès</li>
            </ul>
            <ul>
            <li>Where To Find Me</li>
              <li>Github</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
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