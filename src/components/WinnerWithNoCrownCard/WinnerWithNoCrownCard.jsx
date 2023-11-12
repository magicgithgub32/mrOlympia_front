import React from "react";
import "./WinnerWithNoCrownCard.css";

const WinnerWithNoCrownCard = ({ allNoCrownWinners }) => {
  return allNoCrownWinners.map((allNoCrownWinner, index) => (
    <article className="winnersWithNoCrown-article" key={index}>
      <h2>Era: {allNoCrownWinner.era}</h2>
      <div className="winner-nocrown-image-wrapper">
        <img src={allNoCrownWinner.image} alt={allNoCrownWinner.name}></img>
      </div>
      <h4>{allNoCrownWinner.name}</h4>
      <p>{allNoCrownWinner.nationality}</p>
    </article>
  ));
};

export default WinnerWithNoCrownCard;
