import React, { useEffect, useState } from "react";
import "./WinnersWithNoCrown.css";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import WinnerWithNoCrownCard from "../../components/WinnerWithNoCrownCard/WinnerWithNoCrownCard";

const WinnersWithNoCrown = () => {
  const [allNoCrownWinners, setAllNoCrownWinners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          // `${import.meta.env.VITE_API_URL}/noCrownWinners`
          `${import.meta.env.SERVER_URL}/noCrownWinners`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setAllNoCrownWinners(data);
      } catch (error) {
        console.error("Fetching data failed", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Logo />
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"} />
      </Link>

      <section className="winnersWithNoCrown-section">
        <h1 className="winners-withnocrown-title">WINNERS WITH NO CROWN</h1>
        <WinnerWithNoCrownCard allNoCrownWinners={allNoCrownWinners} />
      </section>
    </>
  );
};

export default WinnersWithNoCrown;
