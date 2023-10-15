import React from "react";
import "./WinnerDetails.css";

import { useLocation } from 'react-router-dom';



const WinnerDetails = () => {
    const location = useLocation();

const currentContest = location.state?.currentContest;
{console.log(location)}

    return (
        <>
        {console.log(currentContest)}
            {currentContest ? (
                <p>{currentContest.year}</p>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default WinnerDetails;
