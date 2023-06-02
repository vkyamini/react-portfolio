import React from 'react';
import NavTag from './components/NavTag';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Github from './components/pages/Github';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  const styles={

    backgroundImage:'url("pink.png")'
  }
  return (
    <BrowserRouter> 
    <div>
   <NavTag/>
   
   <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Github" element={<Github/>}/>
   
    </Routes>
   </div>
   </BrowserRouter>
  //  <div style={styles}>
  //   <p>Welcome</p>
  //   {/* <img src="pink.png" alt="it is me"/> */}
  //   <br/><br/><br/><br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/>
  //   <Footer/>
  //  </div>
   
  
  
  
  );
}

export default App;
