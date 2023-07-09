import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import "./Navbar.css"


export const TempNav = () => {

    let mylink=[
       
        {
            title: "BOXING",
            path: "/boxing"
        },
        {
            title: "CARDIO",
            path: "/cardio"
        },
        {
            title: "YOGA",
            path: "/yoga"
        },
        {
            title: "WEIGHT TRAINING",
            path: "/waightfree"
        },
        
      
       
    ]
  return (
<div id='tempnav'>
   {
    mylink.map((e)=>(<RouterLink key={e.path} to={e.path}>{e.title}</RouterLink>))
   }

</div>
  )
}
