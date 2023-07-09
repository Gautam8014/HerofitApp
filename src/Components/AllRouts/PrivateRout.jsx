import {  useContext } from "react"


import { MyAuthContext } from "../Context/AuthContextProvider";

import { Navigate } from "react-router-dom";
 import { children } from "react";



function PrivateRout({children}){
    const {isAuth} = useContext (MyAuthContext);
    if(!isAuth){
        return <Navigate to = "/login" />

    }
    return children;
        
    
}
export default PrivateRout;