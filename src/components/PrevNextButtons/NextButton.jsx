import React from "react";
import "../Button/Button.css";


const NextButton = ({ setContestYear, contestYear}) => {
    const getNextYear = () => {
        setContestYear(contestYear + 1)
    }
    return (
<button className="prev-next-button" onClick={getNextYear}>NEXT YEAR</button>
    )
}


export default NextButton;