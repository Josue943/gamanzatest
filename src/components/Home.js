import React from "react";
import useCharacters from "../hooks/useCharacters";

const Home = () => {
  const characters = useCharacters();
  return (
    <>
      <div className="sort">
        <ul>
          <li>Name</li>
          <li>Birthday</li>
          <li>Portrayer</li>
        </ul>
      </div>
      <div className="card-container">{}</div>
    </>
  );
};

export default Home;
