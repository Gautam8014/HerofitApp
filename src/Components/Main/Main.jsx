import React from "react";
import "./mains.css";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SportsMmaIcon from "@mui/icons-material/SportsMma";

import { Navigate, useNavigate } from "react-router-dom";
const Main = () => {

  const navigate= useNavigate()

  return (
    <div id="father">
      <div id="intro">
        <p style={{ color: "lightgreen" }}>Our Featured</p>
        <h1>Find quality facilities in each of our club</h1>
        <p>
          We want to help you live a fit and healthy lifestyle! We do this by
          helping you find the most suitable equipment.
        </p>
      </div>

      <div id="main-container">
        <div id="cards" onClick={()=>navigate("/cardio")}>
          <div id="icons">
            <SportsGymnasticsIcon sx={{color:"lightgreen", fontSize: "40px" }} />
          </div>
          <h3>Cardio Area</h3>
          <p>It's the spot to get sweaty and sexy.Torch those calories</p>
        </div>
        <div id="cards" onClick={()=>navigate("/waightfree")}>
          <div id="icons">
            <FitnessCenterIcon sx={{color:"lightgreen", fontSize: "40px" }} />
          </div>
          <h3>Free Weight</h3>
          <p>Our fully-equipped free-weights lets you go beast mode</p>
        </div>
        <div id="cards"  onClick={()=>navigate("/yoga")}>
          <div id="icons">
            <SelfImprovementIcon sx={{color:"lightgreen", fontSize: "40px" }} />
          </div>
          <h3>Floating Yoga</h3>
          <p>It's the spot to get sweaty and sexy.Torch those calories</p>
        </div>
        <div id="cards"  onClick={()=>navigate("/boxing")}>
          <div id="icons">
            <SportsMmaIcon sx={{color:"lightgreen", fontSize: "40px" }} />
          </div>
          <h3>Boxing Area</h3>
          <p>It's the spot to get sweaty and sexy.Torch those calories</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
