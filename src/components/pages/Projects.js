import React from 'react';
import guruu from "../../assets/guruu.png"
import cal from "../../assets/cal.png"
import Books from "../../assets/Books.png"  
import Notes from "../../assets/notes.png"
import Quiz from "../../assets/Quiz.png"
import weather from "../../assets/Weather.png"



export default function Projects(){

   
    return(
       <div >
        <div id="about-projects">
        <p>I am Happy to Share my Best projects during my Learning journey</p>
        <p>Some of them are the ones during my Bootcamp</p>
        <p>I enjoy building front-end apps as it's fun and interactive</p>
        <p>I have aslo build couple of Full Stack projects where one can connect with friends schedule a meeting and their Skills</p>
        </div>
      <div id="project-container">
        <a href="https://647c12620e4a0e000705f12f--guru-ui.netlify.app/" target="_blank">
            <div class="box-1">
            <img src={guruu} alt="mypic"/>
              <p class="project-name">The-Guruu </p>
              <p>A Full Stack App App to connect wthe fellow engineers to Teach / Learn a Particular SKillset</p>
              <p>Communication Could be done by sending a message and received replies by updating the status</p>
              <p>App isa built using MongoDB and react</p>
            </div>
          </a>
          <a href="https://graphql-yamini-books.herokuapp.com/" target="_blank">
            <div class="box-1">
            <img src={Books} alt="mypic"/>
              <p class="project-name">Books App </p>
              <p>A full stack Application for Searching Books based on the Title, author or genre</p> 
              <p>This project was built using graphql</p>
            </div>
          </a>
          <a href="https://addnotes.herokuapp.com/notes" target="_blank">
            <div class="box-1">
            <img  src={Notes} alt="mypic"/>
              <p class="project-name" >Notes-taker</p>
              <p>This Application helps you take notes, save it and delete after it's complete</p>
              <p>This App is a front-end appication</p>
            </div>
          </a>
          <a href=" https://vkyamini.github.io/daily-Calendar/" target="_blank">
            <div class="box-1">
            <img src={cal} alt="mypic"/>
              <p class="project-name">daily-calendar</p>
              <p>This App hepls you have a track of daily schedules based on 24hrs format.</p>
              <p>The tasks are distinguished based on the color - Red,grey,Green. The color changes based on th real time clock getting updated every second</p>
              <p>It is a front - end Application</p>
            </div>
          </a>
          <a href=" https://vkyamini.github.io/Quiz/" target="_blank">
            <div class="box-1">
            <img src={Quiz} alt="mypic"/>
              <p class="project-name">Quiz</p>
              <p>It is a Funb project where a plyer takes Quiz and his scores are displayed</p>
              <p>based on the correct answere. The timer redices for every wrong answere</p>
              <p>It is a front - end Application</p>
            </div>
          </a>
          <a href= "https://vkyamini.github.io/dailt-weather/" target="_blank">
            <div class="box-1">
            <img src={weather} alt="mypic"/>
              <p class="project-name">Weather</p>
              <p>A real time weather generating Application based on the city name</p>
              <p>It is a front - end Application</p>
            </div>
          </a>
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