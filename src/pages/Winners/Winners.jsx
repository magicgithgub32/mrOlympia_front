import { Link } from "react-router-dom";
import "./Winners.css";
import React from "react";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useEffect } from "react";

const Winners = () => {
  const [allContests, setAllContests] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(`${import.meta.env.VITE_API_URL}/contests`);

        const res = await fetch(`${import.meta.env.VITE_API_URL}/contests`);

        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        setAllContests(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  console.log(import.meta.env.VITE_API_URL);
  console.log(allContests);

  return (
    <>
      <Logo />
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"}></Button>
      </Link>
      <div>
        {allContests.length > 0 ? (
          <>
            <ul>
              {allContests.map((contest) => (
                <div key={contest.id} className="contest-card-wrapper">
                  <p>YEAR: {contest.year}</p>
                  <p>WINNER: {contest.winner[0].name}</p>
                  <div className="winner-image-wrapper">
                    <img
                      className="winner-image"
                      src={contest.winner[0].image}
                    />
                  </div>
                  <p>NATIONALITY: {contest.winner[0].nationality}</p>
                  <p>AGE: {contest.age}</p>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Winners;
