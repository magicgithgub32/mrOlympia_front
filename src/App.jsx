import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
