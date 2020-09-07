import React from "react";
import "../styles/Labels.css";
export default function Labels() {
  return (
    <div className="boxMain">
      <div className="labelsContainer">
        <p className="label active">Singups</p>
        <p className="label">Investments</p>
        <p className="label">Revenue</p>
        <p className="label">Exits</p>
        <p className="label">Trades</p>
      </div>
    </div>
  );
}
