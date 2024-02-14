import React from "react";
// import { ReactDOM } from "react-dom";
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return(
    // // <Router>
    // //   <div>
    // //     <Routes>
    // //       <Route path="/" elements={<Navbar />}></Route>
    // //       <Route path="/menu" elements={<Menu />}></Route>
    // //     </Routes>
    // //   </div>
    // // </Router>
    <div>
    {/* <Home /> */}
    <Contact />
    </div>
    
  )
}
export default App;