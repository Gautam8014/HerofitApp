import React from "react";
import "./try.css";
import phone from "./../Images/phone.png"
const TrySection = () => {
  return (
    <div id="try">
      <div id="try1">
        <p style={{color:"lightgreen"}}>Make your easily anywhere!</p>
        <h1>Platform to make it easier for the users</h1>
        <p>
          We want to help you live a fit and healthy lifestyle! We do this by
          helping you find the most suitable equipment for your home gym, studio
          or commercial gym, keeping your budget, lifestyle and fitness goals in
          mind.
        </p>
        <button id="buttonss">Try Now!</button>
      </div>
      <div id="try2">
      <img src={phone} alt="" />
      </div>
     
    </div>
  );
};

export default TrySection;
