import React from 'react';
import NavTag from './components/NavTag';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Github from './components/pages/Github';
import WelcomePage from './components/pages/welcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
return (
    <div>
      <BrowserRouter> 
    <div>
   <NavTag/>
  <Routes>
      <Route path="/react-portfolio" element={<WelcomePage/>} />
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Github" element={<Github/>}/>
   </Routes>
   </div>
   </BrowserRouter>
  </div>
);
}

export default App;
