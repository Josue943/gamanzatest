import React from "react";
import useHome from "../hooks/useHome";
import Character from "./Character";
import Death from "./Death";

const Home = () => {
  const { characters, deaths, count } = useHome();

  return (
    <>
      <div className="main-content">
        <div className="characters-container">
          <div className="sort">
            <h3>SORT BY</h3>
            <ul>
              <li>Name</li>
              <li>Birthday</li>
              <li>Portrayer</li>
            </ul>
          </div>
          <div className="card-container">
            {characters.map(character => (
              <Character character={character} key={character.char_id} />
            ))}
          </div>
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
