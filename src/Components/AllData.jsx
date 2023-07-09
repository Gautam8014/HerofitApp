import React from 'react'

import Home from "./Homepage/Home";

import Main from "./Main/Main";

import News from ".//News/News";

import Slider from "./Slider/Slider";

import TrySection from "./TrySection/TrySection";

const AllData = () => {
  return (
    <div>
         <Home/>
    <Main/>
    <TrySection />
    <News />
    <Slider/>
    </div>

  )
}

export default AllData