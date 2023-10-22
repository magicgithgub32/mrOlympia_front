import React, { useContext } from "react"
import "./WinnersCard.css"
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { ContestContext } from "../../App";


const Winnerscard = () => {
  const {currentContest, setCurrentContest} = useContext(ContestContext)



    return (
        <article className="winners-card">
          <div className="year-article">
            <h2 className="contest-year">Year: {currentContest.year}</h2>
          </div>            

          <div className="image-wrapper">
            <img src={currentContest.winner[0].image} alt={currentContest.winner[0].name} />
          </div> 

          
          
          <div className="winner-name-article">
            
            <p>{currentContest.age} y.o.</p>


            <Link to={"/winnerDetails"} >
            <Button buttonText={currentContest.winner[0].name} className="winner-details"/>
            </Link>

            <p>{currentContest.winner[0].nationality}</p>
          </div>
          </article>
    )
}

export default Winnerscard;