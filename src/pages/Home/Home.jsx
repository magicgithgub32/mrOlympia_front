import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-main-section">
        <article className="hero-wrapper">
          <Hero />
        </article>
      </section>

      <Footer />
    </>
  );
};

export default Home;
