import React from "react";

import sponsors from "../assets/data/sponsors.json";
import Sponsor from "./Sponsor";

const SponsorList = props => {
  const SponsorList = sponsors.map(item => <Sponsor key={item.id} {...item} />);
  return <ul className="sponsor-list">{SponsorList}</ul>;
};

export default SponsorList;