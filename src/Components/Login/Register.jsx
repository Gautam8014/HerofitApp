
import "./mix.css"
import image from "../Images/logo.png"
import { useContext, useEffect } from "react";
import { useState } from "react";


import { MyAuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  // to access anything from context api and accessing here is login 
  const {login,logout, isAuth} = useContext(MyAuthContext);
  // console.log(email,password);
  // to send id password

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };
  const inputvalue = {
      email, 
      password,
      // "email": "eve.holt@reqres.in",
      // "password": "cityslicka"
  }
  //try
  
  const handleSubmit = (event) => {
      event.preventDefault();
      // fetch('https://reqres.in/api/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(inputvalue)
      //   }).then(res => res.json())
      //     //  .then(res => console.log(res));
      //      .then(res => login(res.token))

      if(password==="1234"){
          login(true)
          alert("Login successful!")
      }else{
          alert("Incorrect ID or password. Please try again.")
      }
  }


 if(isAuth){
  return <Navigate to = "/" />;
 }

 

  return (
    <div className={`containerA ${isSignUpMode ? 'sign-up-modeA' : ''}`}>
      <div className="forms-containerA">
        <div className="signin-signupA">
          <form action="#" className="sign-in-formA"  onSubmit={handleSubmit} >
            <h2 className="titleA">Sign in</h2>
            <div className="input-fieldA">
            <i className="fas fa-lock"></i>
              <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value) } />
            </div>
            <div className="input-fieldA">
            <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="btnA solidA" />
           
          </form>
          <form action="#" className="sign-up-formA">
            <h2 className="titleA">Sign up</h2>
            <div className="input-fieldA">
            <i className="fas fa-lock"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fieldA">
            <i className="fas fa-lock"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-fieldA">
            <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btnA" value="Sign up" />
            
            
          </form>
        </div>
      </div>

      <div className="panels-containerA">
        <div className="panelA left-panelA">
          <div className="contentA">
            <h3>New here ?</h3>
            <p>
            Don't have an account, Click here to Sign Up!{"        "}
            </p>
            <button className="btnA transparentA" onClick={handleToggleMode}>
              Sign up
            </button>
          </div>
          <img src={image} className="imageA" alt="" />
        </div>
        <div className="panelA right-panelA">
          <div className="contentA">
            <h3>One of us?</h3>
            <p>
             Already have an account, Click here to Login In!{"     "}
            </p>
            <button className="btnA transparentA" onClick={handleToggleMode}>
              Sign in
            </button>
          </div>
          <img src={image} className="imageA" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register