import React from "react";
import "../styles/MainDashboard.css";
import Icono1 from "../../assets/icons/funds.svg";
import Icono2 from "../../assets/icons/Group_174.svg";
import Icono3 from "../../assets/icons/history.svg";
import Icono4 from "../../assets/icons/locked-padlock.svg";
import Icono5 from "../../assets/icons/Path_188.svg";
import Icono6 from "../../assets/icons/verification-window-button.svg";
import Charts from "./Charts";
import RoundChart from "./RoundChart";
export default function MainDashboard() {
  return (
    <div className="mainBox" style={{ marginBottom: 120 }}>
      <div className="boxIcons">
        <img src={Icono2} style={{ cursor: "pointer" }} />
        <img src={Icono1} style={{ cursor: "pointer" }} />
        <img src={Icono5} style={{ cursor: "pointer" }} />
        <img src={Icono3} style={{ cursor: "pointer" }} />
        <img src={Icono6} style={{ cursor: "pointer" }} />
        <img src={Icono4} style={{ cursor: "pointer" }} />
      </div>
      <div className="chartsContainer">
        <div className="chart" style={{ marginBottom: 30 }}>
          <Charts
            label={"Individuals"}
            color={{ first: "rgb(78, 255, 207)", second: "rgb(8, 164, 188)" }}
          />
        </div>

        <div className="chart">
          <Charts
            label={"Companies"}
            color={{ first: "rgb(255, 86, 238)", second: "rgb(62, 87, 194)" }}
          />
        </div>
      </div>
      <div className="signupsContainer">
        <div className="chart singups first">
          <div
            style={{
              height: "100%",
              width: "50%",
            }}
          >
            <RoundChart
              color={{
                first: "rgb(78, 255, 207)",
                second: "rgb(255, 86, 238)",
              }}
            />
          </div>
          <div style={{ height: "100%", width: "50%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "30%",
                  marginTop: 30,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    color: "#cccccc",
                    fontSize: "130%",
                  }}
                >
                  Total Signups
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "17%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    color: "#cccccc",
                  }}
                >
                  <div>Individuals</div>
                  <div className="containerLine">
                    284<div className="line" style={{ marginLeft: 10 }}></div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "17%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    color: "#cccccc",
                  }}
                >
                  <div>Individuals</div>
                  <div className="containerLine">
                    364
                    <div className="lineRose" style={{ marginLeft: 10 }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart singups second">
          <div className="letter containerLine">
            <div className="line"></div>By Gender
          </div>
          <div className="letter containerLine">
            Female <div className="arrow-down-small"></div>
          </div>
          <div className="letter containerLine">
            Individuals <div className="arrow-down-small"></div>
          </div>
          <div className="activeLetter">102</div>
        </div>
        <div className="chart singups third">
          <div className="boxSignups">
            <div
              className="boxSign letter"
              style={{ marginLeft: 15, marginTop: 10, fontSize: "140%" }}
            >
              Latest Signups
            </div>
            <div className="boxSign secondBox">
              <div
                className="letter"
                style={{ width: "50%", marginTop: 15, marginLeft: 15 }}
              >
                Name
              </div>
              <div className="letter" style={{ width: "50%", marginTop: 15 }}>
                Scheduled Meeting
              </div>
            </div>
          </div>
          <div
            className="letter"
            style={{
              borderBottom: "1px solid #38424B",
              height: "15%",
              width: "95%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "48%",
                  marginLeft: 15,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className="line" style={{ marginRight: 10 }}></div>
                David Hansen
              </div>
              <div>02-03-2020 - 2PM</div>
            </div>
          </div>
          <div
            className="letter"
            style={{
              borderBottom: "1px solid #38424B",
              height: "15%",
              width: "95%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "48%",
                  marginLeft: 15,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className="lineRose" style={{ marginRight: 10 }}></div>
                Shopify
              </div>
              <div>05-03-2020 - 10:30AM</div>
            </div>
          </div>
          <div
            className="letter"
            style={{
              borderBottom: "1px solid #38424B",
              height: "15%",
              width: "95%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "48%",
                  marginLeft: 15,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className="lineRose" style={{ marginRight: 10 }}></div>
                Arvid, Realtree AB
              </div>
              <div>05-03-2020 - 3PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
