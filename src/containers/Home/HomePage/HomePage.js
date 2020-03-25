import React, { Component } from 'react';
import './HomePage.css';
import HeroItem from '../../../components/Hero/HeroItem';
import ListView from '../../../components/List/ListView';
import GridView from '../../../components/Grid/GridView';
import Footer from '../../../components/Footer/Footer';


const Checkbox = props => (
  <input type="checkbox" {...props} />
)

// styled component for icon toggle
// const Icon = styled.svg`
//   
// `

class HomePage extends Component {

// write a function here - if work view checkbox = true, render ListView, else render GridView
constructor(props) {
  super(props);

  this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  this.state = { isChecked: false };
}

handleCheckboxChange = event =>
this.setState({ isChecked: event.target.checked })

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
        <img src="assets/grid.png" alt="" />
        <p>View As Grid</p>
        
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