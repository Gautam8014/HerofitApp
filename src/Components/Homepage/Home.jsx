import React from "react";
import "./home.css";
import person from "../Images/person.png"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ProductPage from "../Product/Boxing";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate= useNavigate()
  return (
    <div id="homeparent">
      <div id="homephoto"  >
        <img src={person} alt="" />
      </div>
      <div id="hometext">
        <p style={{color:"lightgreen"}}>#1 in Trending Now!</p>
        <h1>Making different <br/> from build perfect health</h1>
        <p>
          Stylish and Modern fitness club for those who wants to achive your
          perfect body with professional trainers
        </p>
        <div id="btns" >
        <button id="start"  onClick={()=>navigate("/subscribe")}> Get Started</button>
        <button id="watch" onClick={()=>navigate("/videoPlayer")}> < PlayCircleOutlineIcon sx={{fontSize:"30px"}} />Watch Me!</button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
