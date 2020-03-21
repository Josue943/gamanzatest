import React from "react";
import useCharacters from "../hooks/useCharacters";
import Character from "./Character";

const Home = () => {
  const { characters } = useCharacters();

  return (
    <>
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
      <div className="deaths">
        <h2>Deaths</h2>
      </div>
    </>
  );
};

export default Home;
