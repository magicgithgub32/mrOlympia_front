import { Link } from "react-router-dom";
import React from "react";
import "./Winners.css"
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useEffect } from "react";
import PrevButton from "../../components/PrevNextButtons/PrevButton";
import NextButton from "../../components/PrevNextButtons/NextButton";
import Winnerscard from "../../components/WinnersCard/WinnersCard";

const Winners = () => {
  const [allContests, setAllContests] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${import.meta.env.VITE_API_URL}/contests`);

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
        <section className="winners-section">
          <Winnerscard currentContest={currentContest}/>
          <div className="navigations-buttons">
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
