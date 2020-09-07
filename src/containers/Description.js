import React from "react";
import "../styles/Description.css";
import icon1 from "../../assets/icons/funds.svg";
import icon2 from "../../assets/icons/history.svg";
import icon3 from "../../assets/icons/Group_174.svg";
import icon4 from "../../assets/icons/locked-padlock.svg";
import icon5 from "../../assets/icons/Path_188.svg";
import icon6 from "../../assets/icons/verification-window-button.svg";
export default function Description() {
  return (
    <div className="mainDescription">
      <div
        className="letter overviewContainer"
        style={{ marginLeft: "8%", marginRight: "7%" }}
      >
        OVERVIEW
        <div className="arrow-down"></div>
      </div>

      <div className="infoContainer letter" style={{ marginRight: "7%" }}>
        Total signups
        <div
          style={{
            marginTop: 5,
            color: "#4effa1",
            fontSize: "120%",
            fontWeight: 800,
            fontFamily: "MontserratBold",
          }}
        >
          648
        </div>
      </div>

      <div className="infoContainer letter" style={{ marginRight: "8%" }}>
        Last week
        <div
          style={{
            marginTop: 5,
            color: "#ff56ee",
            fontSize: "120%",
            fontWeight: 800,
            fontFamily: "MontserratBold",
          }}
        >
          12
        </div>
      </div>

      <div className="infoContainer letter" style={{ marginRight: "4%" }}>
        Total investments
        <div
          style={{
            marginTop: 5,
            color: "#1bfbe4",
            fontSize: "120%",
            fontWeight: 800,
            fontFamily: "MontserratBold",
          }}
        >
          102
        </div>
      </div>

      <div className="infoContainer letter" style={{ marginRight: "6%" }}>
        Average investment
        <div
          style={{
            marginTop: 5,
            color: "#4effa1",
            fontSize: "120%",
            fontWeight: 800,
            fontFamily: "MontserratBold",
          }}
        >
          NOK 345,565
        </div>
      </div>

      <div className="infoContainer letter">
        Total exits
        <div
          style={{
            marginTop: 5,
            color: "#ff56ee",
            fontSize: "120%",
            fontWeight: 800,
            fontFamily: "MontserratBold",
          }}
        >
          23
        </div>
      </div>
    </div>
  );
}
