import React, { Component } from 'react';
import './HomePage.css';
import HeroItem from '../../../components/Hero/HeroItem';
import ListView from '../../../components/List/ListView';
import GridView from '../../../components/Grid/GridView';
import Footer from '../../../components/Footer/Footer';
import { faList, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserView,
  MobileView
} from "react-device-detect";

// define checkbox to render
const Checkbox = props => (
  <input type="checkbox" {...props} />
)

let views = {
  "view" : [
    {
      "title" : "View as Grid",
      "url" : "assets/grid.png"
    },
    {
      "title" : "View as List",
      "url" : "assets/list.png"
    }
  ]
}

class HomePage extends Component {

// write a function here - if work view checkbox = true, render ListView, else render GridView
constructor(props) {
  super(props);

  // defining state of checkbox and onChange function
  this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  this.state = { 
    checked: false 
  };


  this.state = {
    isMobile: false
  }
}

handleScroll = e => {
  let element = e.target
  if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    console.log("you scrollin'")
  }
}

// this function handles the change event when checkbox is clicked
handleCheckboxChange = e =>
this.setState({ 
  checked: e.target.checked 
})



  render() {
    // const checked = this.state.checked;
    if (this.state.checked) {
      console.log("Should render grid view")
    } else {
      console.log("Should render list view")
    }

    return (
      <div className="mainContainer">
        <section className="container-fluid aboveTheFold">
          <HeroItem></HeroItem>
          <section className="row line justify-content-center">
            <div className="heroLine drawLine"></div>
          </section>
        </section>

        <div className="viewToggle">

{/* COME BACK TO THIS - DRY!! */}
          {/* ternary for changing toggle icon & text */}
          {this.state.checked ?
           <FontAwesomeIcon icon={faList} size="2x" /> : <FontAwesomeIcon icon={faGripHorizontal} size="2x" />
          }
          {this.state.checked ?
            <p>{views.view[1].title}</p> : <p>{views.view[0].title}</p>
          }

          {/* checkbox render */}
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange} name="toggleGrid" id="toggleGrid"
          />
        </div>


        {/* to do: if on mobile screen, display grid view only */}
        {this.state.checked
          ? <GridView onScroll={this.handleScroll}/>
          : <ListView/>
        }

        <MobileView><GridView></GridView></MobileView>

        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;