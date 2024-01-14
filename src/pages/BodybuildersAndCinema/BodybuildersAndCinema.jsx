import "./BodyBuildersAndCinema.css";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import BodyBuildersAndCinemaCard from "../../components/BodybuildersAndCinemaCard/BodybuildersAndCinemaCard";

const BodyBuildersAndCinema = () => {
  const [allBbAndCinema, setAllBbAndCinema] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(`${import.meta.env.VITE_API_URL}/bbCinema`);
        const res = await fetch(`${import.meta.env.SERVER_URL}/bbCinema`);

        if (!res.ok) {
          throw new Error(`HTTP error: Status: ${res.status}`);
        }
        const data = await res.json();
        setAllBbAndCinema(data);
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

      <section className="bodybuildersAndCinema-section">
        <h1 className="bbAndCinema-title">BODYBUILDERS AND CINEMA</h1>
        <BodyBuildersAndCinemaCard allBbAndCinema={allBbAndCinema} />
      </section>
    </>
  );
};

export default BodyBuildersAndCinema;
