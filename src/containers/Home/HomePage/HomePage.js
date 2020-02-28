import React, { Component } from 'react';
import './HomePage.css';
import HeroItem from '../../../components/Hero/HeroItem';
import ListView from '../../../components/List/ListView';
import GridView from '../../../components/Grid/GridView';
import Footer from '../../../components/Footer/Footer';

class HomePage extends Component {

  render() {
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
            <input type="checkbox" checked="false" name="toggleGrid" id="toggleGrid" />
      </div>

      <ListView></ListView>

      <GridView></GridView>

      <Footer></Footer>
</div>
    );
  }
}

export default HomePage;