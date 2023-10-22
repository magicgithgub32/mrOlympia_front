import React, { useContext } from "react";
import "./WinnerDetails.css";
import { ContestContext } from "../../App";




const WinnerDetails = () => {
    const {currentContest} = useContext(ContestContext)


    return (
        <>
        {console.log("currentContest", currentContest)}
            {currentContest ? (
                <div className="details-image-wrapper">
            <img src={currentContest.winner[0].image} alt={currentContest.winner[0].name} />
          </div>             ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default WinnerDetails;




