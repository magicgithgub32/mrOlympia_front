import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <Logo />
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
