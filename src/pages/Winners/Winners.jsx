import { Link } from "react-router-dom";
import "./Winners.css";
import React from "react";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useEffect } from "react";
import PrevButton from "../../components/PrevNextButtons/PrevButton";
import NextButton from "../../components/PrevNextButtons/NextButton";

const Winners = () => {
  const [allContests, setAllContests] = useState();
  const [contestYear, setContestYear] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/contests`);
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    getData()
      .then((data) => {setAllContests(data) , setContestYear(data[0].year)})
      .catch((error) => console.log("Data not found", error));
  }, []);

  console.log(import.meta.env.VITE_API_URL);
  console.log(allContests);

  const currentYear = new Date().getFullYear()
  return (
    <>
      <Logo />
      <Link to={"/"}>
        <Button buttonText={"HOME"} className={"back-home-button"} />
      </Link>
      <div>
        {allContests  && (
          <section className={"winners-section"}>
            <article className="year-article">
              {contestYear > 1965 &&   
              <PrevButton setContestYear={setContestYear} contestYear={contestYear} />
}
        <h2 className="contest-year">Year:  {contestYear}</h2> 
        {contestYear < currentYear - 1 && 
                <NextButton setContestYear={setContestYear} contestYear={contestYear} />
              }
        </article>
        <article className="image-wrapper">
        <img src={allContests[0].winner[0].image} alt={allContests[0].title} />
        </article>
        <article className="winner-name-article">
        <h2>{allContests[0].winner[0].name}</h2>
        <p>{allContests[0].age} years old</p>
        </article>
        </section>
        )
}
      </div>
    </>
  );
};

export default Winners;
