import { Link } from "react-router-dom";
import "./Winners.css";
import React from "react";
import Button from "../../components/Button/Button";

const Winners = () => {
  return (
    <>
      <p>Hello, we are all the winners</p>
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"}></Button>
      </Link>
    </>
  );
};

export default Winners;
