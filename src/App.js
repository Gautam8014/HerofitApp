import "./App.css";
import AllData from "./Components/AllData";
import AllRoutes from "./Components/AllRouts/Routs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Homepage/Home";
import Register from "./Components/Login/Register";
import Main from "./Components/Main/Main";
import VideoPlayer from "./Components/Music/VideoPlayear";
import Navbar from "./Components/NavigationBar/Navbar";
import { TempNav } from "./Components/NavigationBar/TempNav";
import News from "./Components/News/News";
import Payment from "./Components/Payment/Payment";
import Slider from "./Components/Slider/Slider";
import Subscribe from "./Components/Subscribe/Subscribe";
import TrySection from "./Components/TrySection/TrySection";






function App() {
  return (
    <div className="App">
      {/*
  */}
     {/* <Navbar /> */}
    {/* <AllData/> */}

    <Navbar/>
    <AllRoutes/>
    
    <Footer />
 
        {/* <Subscribe/>  */}
      {/* <Register/>
      <Payment/>   */}
     
    </div>
  );
}

export default App;
