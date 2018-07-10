import React from "react";

import SponsorList from "../components/SponsorList";

const Sponsors = props => {
  return (
    <div className="main-content">
      {/*Create is title component
      Create is workshop sponsor component
      Create is hackathon sponsor component
      Create is sponsor component
      Create is in-kind sponsor component
      Create is community sponsor component
      Create is partner component*/}
      <section className="masthead">
        <header className="masthead__heading">
          <h1 className="t-display masthead__headline">Sponsors & Partners</h1>
          <p className="t-body masthead__body">The companies and organizations that make this event possible. </p>
        </header>
      </section>
      <SponsorList />
    </div>
  );
};

export default Sponsors;