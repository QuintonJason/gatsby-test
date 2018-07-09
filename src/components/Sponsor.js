import React from "react";

const Sponsor = props => {
  const { id,
          title,
          description,
          image,
          isTitleSponsor,
          isWorkshopSponsor,
          isHackathonSponsor,
          isSponsor,
          isInKindSponsor,
          isCommunitySponsor,
          isPartner
        } = props;
  return (
    <li className="sponsor-wrapper">
      <a data-id={props.id} href={`#0`}>
        <img src={props.image} alt={props.description}/>
      </a>
    </li>
  );
};

export default Sponsor;
