import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header>
      <div className="logo-wrapper">
        <img className="logo" src="./Olympia_logo.png" alt="Logo" />
      </div>
      <Link to={"/winners"}>
        <Button
          buttonText={"WINNERS"}
          className={"winners-button"}
          type="submit"
        ></Button>
      </Link>
    </header>
  );
};

export default Header;
