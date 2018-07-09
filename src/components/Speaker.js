import React from "react";

const Speaker = props => {
  const { id, name, title, description, slot, track, image, isWorkshop } = props;
  return (
    <li className="card card-speaker">
      <h3 className="t-section-headline card__headline">{props.name}</h3>
      <p className="t-body card__title">{props.title}</p>
      <span className="t-body card__speaker-track">{props.track}</span>
      <p className="t-body card__time">{props.slot}</p>
      <img className="card__image" src={props.image}/>
      <p class="t-body-small card__description">{props.description}</p>
    </li>
  );
};

export default Speaker;
