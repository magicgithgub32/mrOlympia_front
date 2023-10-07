import React from "react";
import "../Button/Button.css";


const PrevButton = ({ setCurrentIndex}) => {
    const goToPrevYear = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    return (
<button className="prev-next-button" onClick={goToPrevYear}>PREV YEAR</button>
    )
}


export default PrevButton;