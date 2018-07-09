import React from "react";

import speakers from "../assets/data/speakers.json";
import Speaker from "./Speaker";

const WorkshopList = props => {
  const WorkshopList = speakers.filter(item => item.isWorkshop == true)
    .map(item => <Speaker key={item.id} {...item} />);
  return <ul className="snippet-list">{WorkshopList}</ul>;
};

export default WorkshopList;