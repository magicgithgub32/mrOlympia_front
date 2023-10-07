import { Link } from "react-router-dom";
import "./Winners.css";
import React from "react";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useEffect } from "react";
import PrevButton from "../../components/PrevNextButtons/PrevButton";
import NextButton from "../../components/PrevNextButtons/NextButton";
const Winners = () => {
  const [allContests, setAllContests] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/contests`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setAllContests(data);
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    };
    fetchData();
  }, []);


  const currentContest = allContests[currentIndex];

  return (
    <>
      <Logo />
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"} />
      </Link>
      {currentContest ? (
        <section className={"winners-section"}>
          <div className="year-article">
            <h2 className="contest-year">Year: {currentContest.year}</h2>
          </div>
          <div className="image-wrapper">
            <img src={currentContest.winner[0].image} alt={currentContest.winner[0].name} />
          </div>
          <div className="winner-name-article">
            <h2>{currentContest.winner[0].name}</h2>
            <p>{currentContest.age} years old</p>
            <p>{currentContest.winner[0].nationality}</p>
          </div>
          <div className="navigation-buttons">
            {currentIndex > 0 &&
            <PrevButton setCurrentIndex={setCurrentIndex}/> }
            {currentIndex < (allContests.length - 1) &&
            <NextButton setCurrentIndex={setCurrentIndex}/> }
            
            
            
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Winners;
