import React from "react";

const Episodes = () => {
  const options = ["Season 1", "Season 2", "Season 3", "Season 4"];
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
    </>
  );
};

export default Episodes;
