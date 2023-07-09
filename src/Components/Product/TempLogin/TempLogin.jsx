import React from 'react'
import { useContext, useEffect } from "react";
import { useState } from "react";

import { MyAuthContext } from '../../Context/AuthContextProvider';
import { Navigate } from "react-router-dom";

export default function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    // to access anything from context api and accessing here is login 
    const {login, isAuth} = useContext(MyAuthContext);
    // console.log(email,password);
    // to send id password
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
            alert("login successful")
        }else{
            alert("id or password is incorrect")
        }
    }
  

   if(isAuth){
    return <Navigate to = "/" />;
   }
    return (
        <div>
            <form className = "auth_form" onSubmit={handleSubmit}  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e) => setEmail(e.target.value) }
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                   
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <br />
                <input   className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}