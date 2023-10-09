import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Winners from "./pages/Winners/Winners";
import WinnerDetails from "./pages/WinnerDetail/WinnerDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/winners" element={<Winners />}></Route>
          <Route path="/winnerDetails" element={<WinnerDetails/>}></Route>
          {/* <Route path="classicPhysique" element={<ClassicPhysique />}></Route>
          <Route path="winnersWithNoCrown" element={<WinnersWithNoCrown />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
