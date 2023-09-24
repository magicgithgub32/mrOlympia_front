import { Link } from "react-router-dom";
import "./Winners.css";
import React from "react";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useEffect } from "react";

const Winners = () => {
  const [allContests, setAllContests] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/contests`);
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    getData()
      .then((data) => setAllContests(data))
      .catch((error) => console.log("Data not found", error));
  }, [allContests]);

  console.log(import.meta.env.VITE_API_URL);
  console.log(allContests);

  return (
    <>
      <Logo />
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"}></Button>
      </Link>
      <div>
        <p>{allContests[0].year}</p>
      </div>
    </>
  );
};

export default Winners;
