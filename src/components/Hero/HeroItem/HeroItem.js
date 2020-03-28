import React, { Component } from 'react';
import './HeroItem.css';
import Animate from 'animate.css-react';
import 'animate.css/animate.css';

class HeroItem extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="row justify-content-center hero">
         <div className="col-lg-1">       
          <Animate appear="fadeInUp"
          durationAppear={1600}
          component="div">
            <img src="assets/light.png" alt="Dark Mode Toggle" className="light"  /></Animate>
      </div>
      <div className="col-lg-4 blurb">
        <Animate appear="fadeIn"
          durationAppear={1200}
          component="div">
        <h1>Hello,</h1>
        <h1>I'm Michelle.</h1>
        <p>I'm a UX/UI Designer and Front-End Developer with a passion for intuitive, functional design.</p>      
        </Animate> 
      </div>
      </section>
    );
  }
}

export default HeroItem;