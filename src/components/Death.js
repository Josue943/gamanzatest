import React from "react";

const Death = ({ death }) => {
  const { death: d, cause, responsible, last_words } = death;
  return (
    <div className="death-card">
      <h4>{d}</h4>
      <span>{cause}</span>
      <span>{responsible}</span>
      <p>{last_words}</p>
    </div>
  );
};

export default Death;
