import React, { Component } from 'react';
import './ZCircle.css';
import Footer from '../../../components/Footer/Footer';

class ZCircle extends Component {
  render() {
    return (

      <div class="mainContainer" id="caseStudy">
        <section class="container-fluid aboveTheFold">
            <div class="row justify-content-center">
                <div class="col-lg-1 csheading">
              <p>03</p> 
              <div></div> 
              <p>Case Study</p>
                </div>
                <div class="col-lg-11 caseStudyHero">
                    <img src="assets/zcirclemockups.png" alt="" />
                    <div><h1>ZCircle</h1>
                    <h2>Mobile Application Interface</h2></div>
                </div>
            </div>
        </section>
  
        <main class="container-fluid intro">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <h2>Summary</h2>
                    <p>

            <img src="assets/zcirclemockuphero.png" />
                    The concept of this project was identifying a problem that a fellow student experiences in an interview with them. In the interview, I explored different areas of their academic life where they could face problems —this allowed me to design an app customized to meet the users specific needs.
                    </p>
                </div>
                <div class="horline col-lg-1"></div>
                <div class="col-lg-3">
                    <h2>Role</h2>
                    <ul>
                        <li>UX Research</li>
                        <li>Interface Design</li>
                        <li>Hi-Fi Prototype</li>
                        <li class="skip"><a href="d">Skip To Conclusion</a></li>
                        <li class="demo"><a href="d">View App Demo</a></li>
                    </ul>
                </div>
            </div>
        </main>

        <main class="container explanation">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <h2>Getting To The Problem</h2>
                    <p>During the interview, my main focus was to identify pain points in their lives, and the potential to solve them with an app. Through careful questioning, I discovered that a big pain point for the user was how easily they lost focus in class, then resorts to using their phone as a distraction, or a way to pass the time.</p>
                </div>
            </div>
        </main>
 
        <main class="container-fluid users p-0">
            <div class="row">
                <div class="col-lg-8">
                    <img src="assets/girlatlaptop.png" alt="" />
                </div>
                <div class="col-lg-4 explanation">
                    <h2>Users & Audience</h2>
                    <p>Individuals who would like to reduce mobile distractions, develop better concentration skills, more consistent focus habits that help them to prioritize being productive and accomplishing goals.</p>
                    <ul>
                        <li>Students</li>
                        <li>Freelancers</li>
                        <li>Hobbyists</li>
                        <li>Academics</li>
                    </ul>
                </div>
            </div>
        </main>
   
        <main class="container-fluid p-0 banner">
            <div class="row">
                <div class="col-lg-12">
                    <img src="assets/redirect_userstory.png" alt="" />
                </div>
            </div>
        </main>
   
        <main class="container explanation">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <h2>Overcoming Challenges</h2>
                    <p>Create a platform that allows the user to schedule time to focus, is intuitive with minimal steps as not to defer the user from consistent use. Consistency is important in the success of the app as it helps to develop a new habit, which can take approximately 2 months to do.</p>
                    <p>Create a concept that will lock the user out of their phone but still allow access in emergency situations - making the task to cancel the event a lengthy process, to defer users from giving up.</p>
                </div>
            </div>
        </main>

        <main class="container-fluid p-0 supportingImages">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <img src="assets/redirect_eventprompt.png" alt="" />
                </div>
            </div>
        </main>

        <main class="container-fluid solution">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <img src="assets/redirect_floating.png" alt="" />
                </div>
                <div class="col-lg-4">
                    <h2>Eliminate Mobile Distractions</h2>
                    <p>I developed a scheduling app concept that is meant to defer users from mobile distractions and improve their focusing skills. The app allows users to set the date, time, define their goals, as well as how the user will reward themselves for their efforts.</p>
                    <p>They have the option to repeat the event daily, weekly, or bi-weekly. This was a key feature as habits are created through repetition. When the time of the event occurs, the user is locked out of their phone for the predetermined timeframe, with the option to cancel the event in case of an emergency.</p>
                </div>
            </div>
        </main>

        <main class="container supportingContent">
            <div class="row justify-content-center">
                <div class="col-lg-6 userflow">
                    <img src="assets/redirect_userflow.png" alt="" />
                </div>
            </div>
            <div class="row">  
                <div class="col-lg-6 explanation">
                    <h2>Blue, A Call for Attention</h2>
                    <p>A lower contrast colour combination was used - blue and grey - to be easier on the eyes. Blue is seen as a calm, relaxing colour. The use of blue will be strictly to highlight important areas and calls to action. I’ve used blue to notify the user of an update, highlight important information, or encourage the user with a call to action. The components on the right are examples of this. </p>
                </div>
                <div class="col-lg-6">
                    <img src="assets/redirect_blue.png" alt="" />
                </div>
            </div>
        </main>

        <main class="container-fluid p-0 finalContent">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <img src="assets/redirect_calendar.png" alt="" />
                </div>
            </div>
        </main>

    <main class="container conclusion">
        <div class="row justify-content-center">
            <div class="col-lg-7 explanation">
                <h2>Conclusion: Positive Reinforcement</h2>
                <p>In order to motivate and encourage users to define a goal and prioritize it through a mobile application, we must first break the habit and provide incentive. After discussion with various users, I learned that they would be more inclined to follow the schedule if they were reminded of their goals and how they will celebrate their practice.</p>
                <p>By having the user set up a “focus schedule” ahead of time, it creates accountability right away. Within the event creation form, the user is also required to specify the reason, long term goal, and how they will reward themselves once completed. The importance of having the user define their goals and implement positive reinforcement lays behind the secret to successfully developing a habit - providing reason for action.</p>
                <a href="">Watch A Demo Of The App</a>
            </div>
        </div>
    </main>

    <main class="container-fluid p-0 concludingImages">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <img src="assets/redirect_calscreen.png" alt="" />
                <img src="assets/redirect_create.png" alt="" />
                <img src="assets/redirect_notify.png" alt="" />
                <img src="assets/redirect_notexpand.png" alt="" />
                <img src="assets/redirect_locked.png" alt="" />
                <img src="assets/redirect_emerg.png" alt="" />
            </div>
        </div>
    </main>
    <Footer></Footer>
  </div>

    );
  }
}

export default ZCircle;