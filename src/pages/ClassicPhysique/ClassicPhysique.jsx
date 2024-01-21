import React, { useEffect, useState } from "react";
import "./ClassicPhysique.css";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import WinnerWithNoCrownCard from "../../components/WinnerWithNoCrownCard/WinnerWithNoCrownCard";

const ClassicPhysique = () => {
  const [allClassics, setAllClassics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(`${import.meta.env.VITE_API_URL}/classics`);
        // const res = await fetch(`${import.meta.env.SERVER_URL}/classics`);
        const res = await fetch("https://mrolympia.onrender.com/api/classics");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setAllClassics(data);
      } catch (error) {
        console.log("Fetching classics failed", error);
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

      <section className="classics-section">
        <h1 className="classics-title">CLASSIC-PHYSIQUE WINNERS</h1>

        <WinnerWithNoCrownCard allNoCrownWinners={allClassics} />
      </section>
    </>
  );
};

export default ClassicPhysique;
