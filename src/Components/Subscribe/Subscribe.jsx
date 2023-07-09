import React from "react";
import "./sub.css";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
const Subscribe = () => {

  const navigate= useNavigate()
  return (
    <div id="parent">
      <div id="logo">
        <img src={logo} alt=""  />
        <h2>Our Subscription Packs according to your need!</h2>
        
        <p>
          {" "}
          We offer flexible subscription plans to cater to different needs. You
          can choose from our subscription options of 3, 6, 9, or 12 months.
          Each subscription plan gives you full access to our gym facilities,
          including state-of-the-art equipment, group fitness classes, and
          personalized training sessions.
        </p>
        
        <button id="start" style={{color:"white"}}  onClick={()=>navigate("/")}>Homepage</button>
      </div>
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
              <div className="overlay">
                <h3>3 Months Basic Plan</h3>
                <p>
                 Includes Cardio &
                 Weight Training.
                </p>
                {/* <a href="#">Book Now</a> */}
                <button id="sta" onClick={()=>navigate("/payment")}>Book Now</button>
              </div>
            </div>
            <div className="box">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
              />
              <div className="overlay">
                <h3>6 months Silver Plan</h3>
                <p>
                Includes Cardio,
                 Weight Training & access to the
                 Zumba Class and Steam Sauna
                </p>
                {/* <a href="#">Book Now</a> */}
                <button  id="sta" onClick={()=>navigate("/payment")}>Book Now</button>
              </div>
            </div>
            <div className="box">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=499&q=80"
              />
              <div className="overlay">
                <h3>9 months Gold Plan </h3>
                <p>
                Includes Cardio,
                 Weight Training,
                 Zumba Class, Steam Sauna and Yoga Classes
                </p>
                {/* <a href="#">Book Now</a> */}
                <button  id="sta" onClick={()=>navigate("/payment")}>Book Now</button>
              </div>
            </div>
            <div className="box">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              />
              <div className="overlay">
                <h3>12 months Diamond Plan</h3>
                <p>
                Includes Cardio,
                 Weight Training,
                 Zumba Class, Steam Sauna, Yoga Classes,
                 Personal Trainer 
                </p>
                {/* <a href="#">Book Now</a> */}
                <button  id="sta" onClick={()=>navigate("/payment")}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
