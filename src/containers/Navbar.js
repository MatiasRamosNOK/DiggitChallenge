import React from "react";
import "../styles/Navbar.css";
import CompanyLogo from "../../assets/images/logo.png";
import UserLogo from "../../assets/images/avatar.png";
export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="leftBox">
        <img src={CompanyLogo} className="logoImg"></img>
      </div>
      <div className="rightBox">
        <div className="containerLetters">
          <p className="letterNavbar letter">ACCOUNT</p>
          <p className="letterNavbar letter">CHARTS</p>
          <p className="letterNavbar letter" style={{ marginRight: "70px" }}>
            HELP
          </p>
        </div>
        <img src={UserLogo} className="logoUser"></img>
        <div className="rightBoxInformation">
          <p className="secondaryLetter name">Elsa Andresen</p>
          <div className="date">
            <div className="secondaryLetter infoTime dateExac">17-02-2020</div>
            <div className="secondaryLetter infoTime">2.45 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
