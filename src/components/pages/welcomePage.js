import React from "react";
import image from "../../assets/mine.jpeg"
import "./style.css"
function WelcomePage(){

return(
    <div>
    <div id="about-container">
    <img id="myimage" src={image} alt="mypic"/>
    <div id="details-section"> 
     <h1>I am a Full Stack web Developer</h1>
        <p>My name is <span>V.K yamini</span> </p>
        <p>I live in kirkland seattle.</p>
        <p>i love developing web Application which i think is both fun and challenging</p>
        <p></p>
    </div>
    </div>
    <hr></hr>
    <div id="social-media-links">
        <p id="socialmedia-header">To connect through Social media</p>
        <div id="media-links"> 
        <ul>
        <li>Linkedin</li>
        <li>Github</li>
        <li>facebook/instagram</li>
        </ul>
        </div>
       
    </div>
   </div>
)
}
export default WelcomePage;