import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { createContext, useState } from "react";
import Home from "./pages/Home/Home";
import Winners from "./pages/Winners/Winners";
import WinnerDetails from "./pages/WinnerDetail/WinnerDetails";

export const ContestContext = createContext()

const App = () => {
const [currentContest, setCurrentContest] = useState("")


  return (
    <>
    <ContestContext.Provider
      value={{
        currentContest: currentContest,
        setCurrentContest: setCurrentContest,
      }}
      >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/winners" element={<Winners />}></Route>
          <Route path="/winnerDetails" element={<WinnerDetails />}></Route>
          {/* <Route path="classicPhysique" element={<ClassicPhysique />}></Route>
          <Route path="winnersWithNoCrown" element={<WinnersWithNoCrown />}></Route> */}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      </ContestContext.Provider>
    </>
  );
};

export default App;
