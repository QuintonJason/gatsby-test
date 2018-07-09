import React from "react";

const Speaker = props => {
  const { id, name, title, description, slot, track, image, isWorkshop } = props;
  return (
    <li className="speaker-wrapper">
      <a data-id={props.id} href={`#0`}>
        <h3>{props.name}</h3>
        <h3>{props.title}</h3>
        {/* <p>{props.caption}</p> */}
      </a>
    </li>
  );
};

export default Speaker;
