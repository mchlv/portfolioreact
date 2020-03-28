import React, { Component } from 'react';
import './HomePage.css';
import HeroItem from '../../../components/Hero/HeroItem';
import ListView from '../../../components/List/ListView';
import GridView from '../../../components/Grid/GridView';
import Footer from '../../../components/Footer/Footer';
import { faList, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    isChecked: false 
  };
}

// this function handles the change event when checkbox is clicked
handleCheckboxChange = event =>
this.setState({ 
  isChecked: event.target.checked 
})

  render() {
    const isChecked = this.state.checked;
    if (this.state.isChecked) {
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
          {this.state.isChecked ?
           <FontAwesomeIcon icon={faList} size="2x" /> : <FontAwesomeIcon icon={faGripHorizontal} size="2x" />
          }
          {this.state.isChecked ?
            <p>{views.view[1].title}</p> : <p>{views.view[0].title}</p>
          }

          {/* checkbox render */}
          <Checkbox
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange} name="toggleGrid" id="toggleGrid"
          />
        </div>

        {this.state.isChecked
          ? <GridView/>
          : <ListView/>
        }

        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;