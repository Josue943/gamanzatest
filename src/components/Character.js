import React from "react";

const Characters = ({ character }) => {
  const { name, occupation, status, birthday, img } = character;
  return (
    <div className="card-character">
      <div className="img-container">
        <img src={img} />
      </div>
      <div className="card-footer">
        <h4>{name}</h4>
        <span>{occupation}</span>
        <span>{status}</span>
        <span>{birthday}</span>
      </div>
    </div>
  );
};

export default Characters;
