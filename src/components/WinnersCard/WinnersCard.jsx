import React from "react"
import "./WinnersCard.css"
import { Link, useNavigate } from "react-router-dom";


const Winnerscard = ({currentContest}) => {


    return (
        <article className="winners-card">
          <div className="year-article">
            <h2 className="contest-year">Year: {currentContest.year}</h2>
          </div>

          <Link to={{ pathname: '/winnerDetails', state: { currentContest } }}>

          <div className="image-wrapper">
            <img src={currentContest.winner[0].image} alt={currentContest.winner[0].name} />
          </div>

          </Link>
          
          <div className="winner-name-article">
            <h2>{currentContest.winner[0].name}</h2>
            <p>{currentContest.age} years old</p>
            <p>{currentContest.winner[0].nationality}</p>
          </div>
          </article>
    )
}

export default Winnerscard;