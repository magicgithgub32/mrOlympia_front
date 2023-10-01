import React from "react";
import "../Button/Button.css";


const PrevButton = ({ setContestYear, contestYear}) => {
    const getPrevYear = () => {
        setContestYear(contestYear - 1)
    }
    return (
<button className="prev-next-button" onClick={getPrevYear}>PREV YEAR</button>
    )
}


export default PrevButton;