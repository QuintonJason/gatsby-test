import React from "react";

import SpeakerList from "../components/SpeakerList";

const Conference = props => {
  return (
    <div className="">
      <SpeakerList />
      <h2 className="t-page-eyebrow">Day 3</h2>
      <h1 className="t-page-title">Conference</h1>
      <p className="t-lead">Saturday, February 24 | 9:00 AM - 6:00 PM</p>
      <p className="t-body">This is our main event. We invite students and professionals to come learn and network. Choose from 2 tracks based on what your interests and skill level. </p>
      <section>
        <h2 className="t-section-headline">Student Track</h2>
        <div className="cards">
          <h3 className="card__eyebrow">Day 1</h3>
          <h4 className="card__headline">Workshop Day</h4>
          <p className="card__time">12:00 pm - 8:00 pm</p>
          <p className="t-body">A day of workshops for students and professionals. 8 90-minute workshops in 2 rooms. Attend one or many.</p>
          <a className="card__link" href="#0">
            <span className="t-hidden">Go to (CARD__HEADLINE)</span>
            {/*TODO: create and insert right arrow svg component*/}
          </a>
        </div>
        <div className="card">
          <h3 className="card__headline">Keisha Perkins</h3>
          <p className="card__d">Using JavaScript Libraries for Game Development</p>
          <span className="">Student Track</span>
          <p className="card__time">10:30 am - 11:30</p>
          <img className="" />
          <p class="t-body-small">Why JavaScript? It’s everywhere. There is a large community and tons of career opportunities. Also, It's Fun! Why p5.js for game development? p5.js is a JavaScript library that starts with the goal to make coding accessible for artists, designers, educators, and beginners. Also, It's Fun!</p>
        </div>
      </section>
    </div>
  );
};

export default Conference;