
import {Route, Routes} from "react-router-dom"

import { SingleBoxing } from "../Product/SingleBoxing";
import { SingleYoga } from "../Product/SingleYoga";
import Boxing from "../Product/Boxing";
import Yoga from "../Product/Yoga";
import Cardio from "../Product/Cardio";
import { SingleCardio } from "../Product/SingleCardio";
import WaightFree from "../Product/WaightFree";
import { SinglWaightFree } from "../Product/SingleWaightFree";





import PrivateRout from "./PrivateRout";
import AllData from "../AllData";
import Register from "../Login/Register";
import Subscribe from "../Subscribe/Subscribe";

import TempPay from "../Payment/TempPay";
import Music from "../Music/Music";
import VideoPlayer from "../Music/VideoPlayear";

const AllRoutes = () => {
  return(

<Routes>
  <Route  path="/" element={<AllData/>}></Route>
  <Route path="boxing" element={<Boxing/>}></Route>
  <Route path="/boxing/singleboxing/:id" element={<SingleBoxing/>}></Route>
  <Route path="yoga" element={<Yoga/>}></Route>
  <Route path="/yoga/singleyoga/:id" element={<SingleYoga/>}></Route>
  <Route path="cardio" element={<Cardio/>}></Route>
  <Route path="/cardio/singlecardio/:id" element={<SingleCardio/>}></Route>
  <Route path="waightfree" element={<WaightFree/>}></Route>
  <Route path="/waightfree/singlewaightfree/:id" element={<SinglWaightFree/>}></Route>




  <Route  path="/login" element={<Register/>}/>   
  <Route  path="/subscribe" element={<Subscribe/>}/>  
  <Route  path="/payment" element={<PrivateRout><TempPay/></PrivateRout>}/> 
  <Route  path="/song" element={<Music/>}/>   
  <Route  path="/videoPlayer" element={<VideoPlayer/>}/>  
  
</Routes>
  )
};

export default AllRoutes;