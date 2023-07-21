import React from 'react';
import "./pages/style.css"
import { Link } from "react-router-dom";
export default function navtags () {
return(
    <div><h1 id="header">Welcome to my Portfolio</h1>
  
        <ul>
        <li><Link to="/AboutMe">AboutMe</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Github">Contact Details</Link></li>
        </ul>
  
        
   
    <hr/>
    </div>
)
}