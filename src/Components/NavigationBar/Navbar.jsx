import React, { useState,useEffect } from 'react'
import logo from "../Images/logo.png"
import {Link as RouterLink} from "react-router-dom"
import "./Navbar.css"
import { Navigate, useNavigate } from "react-router-dom";
import { MyAuthContext } from '../Context/AuthContextProvider';
import { useContext } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {login,logout, isAuth} = useContext(MyAuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // console.log(scrolled)
       // console.log(scrolled)
      if (scrolled > 20) {
        document.querySelector(".Navbar").style.backgroundColor = "black";
      }
        if(scrolled<20){
     
      document.querySelector(".Navbar").style.background= "rgb(34,11,56)";
     
     
  }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate= useNavigate()
  
  let mylink=[
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Program",
        path: "/boxing"
    },
    {
        title: "About",
        path: "/"
    },
    {
        title: "Blog",
        path: "/"
    },
  
    {
        title: "Music",
        path: "/song"
    },
   
  
  ]

  return (
    <div className="Navbar">
        <img id='logo1' src={logo} alt=""  onClick={()=>navigate("/")} />
      <div className={`nav-items ${isOpen && "open"}`}>
        {/* <a href="/home">Home</a>
        <a href="/about">Program</a>
        <a href="/service">About</a>
        <a href="/contact">Blog</a> */}


{
    mylink.map((e)=>(<RouterLink key={e.path} to={e.path}>{e.title}</RouterLink>))
   }
      </div>
      <div id='btns'>
      {isAuth ? (
          <>
  <h3 style={{color:"white"}}>Aniket</h3> 
  <button  id="signin" onClick={() => {logout()}}>Log out</button>
  </>
  
) : (
  <>
  
    <button id="signin" onClick={() => navigate("/login")}>
      SignIn
    </button>
    <button id="register" onClick={() => navigate("/login")}>
      Register
    </button>
  </>
  
)}
      {/* <button id='signin'   onClick={()=>navigate("/login")}>SignIn</button>
      <button id='register'  onClick={()=>navigate("/login")}>Register</button> */}
      </div>
      
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar