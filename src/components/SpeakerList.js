import React from "react";

import speakers from "../assets/data/speakers.json";
import Speaker from "./Speaker";

const SpeakerList = props => {
  const SpeakerList = speakers.filter(item => item.isSpeaker == true)
    .map(item => <Speaker key={item.id} {...item} />);
  return <ul className="snippet-list">{SpeakerList}</ul>;
};

export default SpeakerList;