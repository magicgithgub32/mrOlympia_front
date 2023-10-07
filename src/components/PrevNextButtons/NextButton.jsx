import React from "react";
import "../Button/Button.css";


    const NextButton = ({setCurrentIndex}) => {
        const goToNextYear = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }    
        return (
            <button className="prev-next-button" onClick={goToNextYear}>NEXT YEAR</button>
                )
    
    }
    

export default NextButton



