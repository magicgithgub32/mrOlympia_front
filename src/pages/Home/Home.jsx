import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import React from "react";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-main-section">
        <article className="home-buttons">
        <Link to={"/winners"}>
        <Button
          buttonText={"WINNERS"}
          className={"winners-button"}
          type="submit"
        />
        </Link>
          <Link to={"/classic-physique"} >
        <Button buttonText={"CLASSIC-PHYSIQUE"} type="submit"/>
        </Link>
        <Link to={"winnersWithNoCrown"} >
          <Button buttonText={"WINNERS WITH NO CROWN"} type="submit"/>
        </Link>
        
        </article>
        <article className="hero-wrapper">

          <Hero />
        </article>
      </section>

      <Footer />
    </>
  );
};

export default Home;
