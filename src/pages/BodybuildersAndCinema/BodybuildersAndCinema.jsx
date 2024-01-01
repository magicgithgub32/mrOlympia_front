import "./BodyBuildersAndCinema.css";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const BodyBuildersAndCinema = () => {
  const [allBbAndCinema, setAllBbAndCinema] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/bbCinema`);

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
      {console.log(allBbAndCinema)}
      <Logo />
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"} />
      </Link>

      <section className="bodybuildersAndCinema-section">
        <h1 className="bbAndCinema-title">BODYBUILDERS AND CINEMA</h1>
        {allBbAndCinema.map((item, index) => (
          <article className="bbAndCinema-article" key={index}>
            <h2>Movie: {item.movie}</h2>
            <div className="bbAndCinema-image-wrapper">
              <img src={item.picture} alt={item.movie} />
            </div>
            <div className="bbAndCinema-info">
              <h4>{item.bbName}</h4>
              <p>{item.year}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default BodyBuildersAndCinema;
