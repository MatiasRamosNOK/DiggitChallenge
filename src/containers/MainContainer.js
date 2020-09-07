import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Description from "./Description";
import MainDashboard from "./MainDashboard";
import Labels from "./Labels";
export default function MainContainer() {
  console.log("Hola");
  useEffect(() => {
    console.log("HOla");
  }, []);
  return (
    <div>
      <Navbar />
      <Description />
      <Labels />
      <MainDashboard />
    </div>
  );
}
