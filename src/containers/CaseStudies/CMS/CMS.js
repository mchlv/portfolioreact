import React, { Component } from 'react';
import './CMS.css';
import Footer from '../../../components/Footer/Footer';

class CMS extends Component {
  render() {
    return (

      <div className="mainContainer" id="caseStudy">
        <section className="container-fluid aboveTheFold">
            <div className="row justify-content-center">
                <div className="col-lg-1 csheading">
              <p>02</p> 
              <div></div> 
              <p>Case Study</p>
                </div>
                <div className="col-lg-11 caseStudyHero">
                    <img src="assets/cmsmockups.png" alt="" />
                    <div><h1>Content Management System</h1>
                    <h2>Web Application Interface</h2></div>
                </div>
            </div>
        </section>
  
        <main className="container-fluid intro">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <h2>Summary</h2>
                    <p>
                    The concept of this project was to create a content management system interface for the administration side of an eCommerce website. 

                    As a student project, it is to be assumed that the client has an existing store and is planning to expand its reach through the online community. 
                    </p>
                </div>
                <div className="horline col-lg-1"></div>
                <div className="col-lg-3">
                    <h2>Role</h2>
                    <ul>
                        <li>UX/UI Design</li>
                        <li>Hi-Fi Prototype</li>
                        <li className="skip"><a href="d">Skip To Conclusion</a></li>
                        <li className="demo"><a href="d">View App Demo</a></li>
                    </ul>
                </div>
            </div>
        </main>

        {/* <main className="container explanation">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2>Getting To The Problem</h2>
                    <p>During the interview, my main focus was to identify pain points in their lives, and the potential to solve them with an app. Through careful questioning, I discovered that a big pain point for the user was how easily they lost focus in className, then resorts to using their phone as a distraction, or a way to pass the time.</p>
                </div>
            </div>
        </main> */}

 
        <main className="container-fluid users p-0">
            <div className="row justify-content-center">
                <div className="col-lg-5 cmsUsers">
                    <img src="assets/cms_wireframes.png" alt="" />
                </div>
                <div className="col-lg-5 explanation">
                    <h2>Assessing User Needs</h2>
                    <p>The user would like to start selling their products online. They are often busy managing other facets of their business, which means that the management and operation of the eCommerce platform needs to be practical and manageable. </p>
                    
                    <p>Prior to launching the eCommerce store, the user must upload all their products, providing descriptions, images, prices. After the launch, the user must be able to manage orders, products, and product reviews.</p>
                </div>
            </div>
        </main>

   
        <main className="container-fluid p-0 banner">
            <div className="row">
                <div className="col-lg-12 cms">
                    <img src="assets/cms_designelements.png" alt="" />
                </div>
            </div>
        </main>
   
        <main className="container explanation">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2>Overcoming Challenges</h2>
                    <p>Create a platform that allows the user to schedule time to focus, is intuitive with minimal steps as not to defer the user from consistent use. Consistency is important in the success of the app as it helps to develop a new habit, which can take approximately 2 months to do.</p>
                    <p>Create a concept that will lock the user out of their phone but still allow access in emergency situations - making the task to cancel the event a lengthy process, to defer users from giving up.</p>
                </div>
            </div>
        </main>

        <main className="container-fluid p-0 supportingImages">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <img src="assets/cms_dashboard.png" alt="" />
                </div>
            </div>
        </main>

        <main className="container-fluid cmsfeatures">
            <div className="row justify-content-center">
            <div className="col-lg-4">
                    <h2>Must Have Features</h2>
                    <ul>
                      <li>add, edit, and delete products</li>
                      <li>view, fulfill, and cancel customer orders </li>
                      <li>approve, deny, or delete product reviews</li>
                      <li>track product inventory</li>
                      <li>set products as featured items</li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <img src="assets/cms_nav.png" alt="" />
                </div>
            </div>
        </main>

        {/* <main className="container supportingContent">
            <div className="row justify-content-center">
                <div className="col-lg-6 userflow">
                    <img src="assets/cms_dashboard.png" alt="" />
                </div>
            </div>
            <div className="row">  
                <div className="col-lg-6 explanation">
                    <h2>Blue, A Call for Attention</h2>
                    <p>A lower contrast colour combination was used - blue and grey - to be easier on the eyes. Blue is seen as a calm, relaxing colour. The use of blue will be strictly to highlight important areas and calls to action. I’ve used blue to notify the user of an update, highlight important information, or encourage the user with a call to action. The components on the right are examples of this. </p>
                </div>
                <div className="col-lg-6">
                    <img src="assets/redirect_blue.png" alt="" />
                </div>
            </div>
        </main> */}

        <main className="container-fluid p-0 finalContent">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <img src="assets/cms_orders.png" alt="" />
                </div>
            </div>
        </main>

    <main className="container conclusion">
        <div className="row justify-content-center">
            <div className="col-lg-7 explanation">
                <h2>Conclusion: Positive Reinforcement</h2>
                <p>In order to motivate and encourage users to define a goal and prioritize it through a mobile application, we must first break the habit and provide incentive. After discussion with various users, I learned that they would be more inclined to follow the schedule if they were reminded of their goals and how they will celebrate their practice.</p>
                <p>By having the user set up a “focus schedule” ahead of time, it creates accountability right away. Within the event creation form, the user is also required to specify the reason, long term goal, and how they will reward themselves once completed. The importance of having the user define their goals and implement positive reinforcement lays behind the secret to successfully developing a habit - providing reason for action.</p>
                <a href="">Watch A Demo Of The App</a>
            </div>
        </div>
    </main>

    <main className="container-fluid p-0 cms_concludingImages">
        <div className="row  justify-content-center">
            <div className="col-lg-12">
                <img src="assets/cms_productgrid.png" alt="" />
            </div>
        </div>
    </main>
    <Footer></Footer>
  </div>

    );
  }
}

export default CMS;