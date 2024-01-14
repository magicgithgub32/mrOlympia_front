import React from "react";
import "./BodyBuildersAndCinemaCard.css";

const BodyBuildersAndCinemaCard = ({ allBbAndCinema }) => {
  return allBbAndCinema.map((item, index) => (
    <article className="bbAndCinema-article" key={item.id || index}>
      <h2>Movie: {item.movie}</h2>
      <div className="bbAndCinema-image-wrapper">
        <img src={item.picture} alt={item.movie} />
      </div>
      <div className="bbAndCinema-info">
        <h4>
          {Array.isArray(item.bbName) ? item.bbName.join(", ") : item.bbName}
        </h4>
        <p>{item.year}</p>
      </div>
    </article>
  ));
};

export default BodyBuildersAndCinemaCard;
