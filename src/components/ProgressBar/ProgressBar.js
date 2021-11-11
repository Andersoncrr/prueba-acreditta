import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ combat, ability }) => {
  return (
    <div className="title">
      {ability}
      <div className="progress">
        {combat}
        <div style={{ width: `${combat}%` }} className="progress-value"></div>
      </div>
    </div>
  );
};
