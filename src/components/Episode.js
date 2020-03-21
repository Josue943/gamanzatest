import React from "react";

const Episode = ({ data }) => {
  const { title, season, episode, air_date } = data;
  return (
    <div className="episode-card">
      <h2>{title}</h2>
      <span>{season}</span>
      <span>{episode}</span>
      <span>{air_date}</span>
    </div>
  );
};

export default Episode;
