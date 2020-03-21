import React from "react";
import useEpisodes from "../hooks/useEpisodes";
import Episode from "./Episode";

const Episodes = () => {
  const options = ["Season 1", "Season 2", "Season 3", "Season 4"];
  const { episodes } = useEpisodes();
  console.log(episodes);
  return (
    <>
      <div className="form-control">
        <h3>FILTER</h3>
        <select name="select">
          <option value="" />
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="episode-container">
        {episodes.map(data => (
          <Episode data={data} key={data.episode_id} />
        ))}
      </div>
    </>
  );
};

export default Episodes;
