import React, { useContext } from "react";
import "./WinnerDetails.css";
import { ContestContext } from "../../App";
import Home from "../Home/Home";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const WinnerDetails = () => {
  const { currentContest } = useContext(ContestContext);

  return (
    <>
      <Logo />
      <Link to={"/winners"}>
        <Button buttonText={"BACK"} className={"back-button"} type="submit" />
      </Link>
      {currentContest ? (
        <div className="details-image-wrapper">
          <img
            src={currentContest.winner[0].image}
            alt={currentContest.winner[0].name}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default WinnerDetails;
