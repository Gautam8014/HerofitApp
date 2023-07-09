import React from "react";
import "./footer.css";
import logo2 from "../Images/logo.png"
const Footer = () => {
  return (
      <div id="grandparent">
        <div id="parentfooter">
      <div id="child1">
        <h2>HeroFit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem, ipsum dolor.</p>
        <label>Subscribe to our NewsLetter!</label>
        <input type="text" placeholder="        Your Email" /> 
      </div>
      <div  id="child2">
        <h2>About</h2>
        <p>About Us</p>
        <p>Features</p>
        <p>News & Blog</p>
        <p>Why Herofit</p>
      </div>
      <div id="child3">
        <h2>Support</h2>
        <p>FAQ</p>
        <p>Support Center</p>
        <p>Contact US</p>
      </div>
      <div id="child4">
        <h2>Partner</h2>
        <p>Our Partner</p>
        <p>Become Partner</p>
      </div>
    </div>


     <div id="parent2">
     <img id='logo2' src={logo2} alt="" />
     </div>

      </div>




   
  );
};

export default Footer;
