import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Winners from "./pages/Winners/Winners";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/winners" element={<Winners />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
