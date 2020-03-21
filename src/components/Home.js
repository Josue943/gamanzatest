import React, { useState, useEffect } from "react";
import useHome from "../hooks/useHome";
import Character from "./Character";
import Death from "./Death";

const Home = () => {
  const [sortBy, setSortBy] = useState("");
  const { characters, deaths, count } = useHome();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const options = ["name", "birthday", "portrayer"];

  useEffect(() => {
    if (characters.length) setData(characters);
  }, [characters]);

  useEffect(() => {
    if (sortBy === "") return;
    console.log(sortBy);
  }, [sortBy]);

  return (
    <>
      <div className="main-content">
        <div className="characters-container">
          <div className="sort">
            <h3>SORT BY</h3>
            <ul>
              {options.map(o => (
                <li key={o} value={o} onClick={() => setSortBy(o)}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-container">
            {data.map(character => (
              <Character character={character} key={character.char_id} />
            ))}
          </div>
          <button className="load">Load More</button>
        </div>

        <div className="deaths">
          <span>Total Deaths: {count}</span>
          <h2>Deaths</h2>
          {deaths.map(death => (
            <Death key={death.death_id} death={death} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
