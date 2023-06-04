import React from 'react';
import guruu from "../../assets/guruu.png"
import cal from "../../assets/cal.png"
import drty from "../../assets/drty.png"
import notes from "../../assets/notes.png"
import portfolio from "../../assets/portfolio.png"



export default function Projects(){

    const styles={
        img:{
            width :"200px",
            height :"200px"
        },
        box:{
            display:"flex",
            justifyContent:"space-between"
         }
    }
    return(
        
        <div >
        <div style={styles.box} >
        <a href="https://647c12620e4a0e000705f12f--guru-ui.netlify.app/" target="_blank">
            <div id="work-div">
            <img style={styles.img} src={guruu} alt="mypic"/>
              <p class="corner text-left">The-Guruu </p>
            </div>
          </a>
          <a href=" https://drty-nomad-2023.herokuapp.com/." target="_blank">
            <div class="box-1">
            <img style={styles.img} src={drty} alt="mypic"/>
              <p class="corner text-left">Drty Nomads</p>
            </div>
          </a>
          <a href="https://vkyamini.github.io/portfolio/" target="_blank">
            <div class="box-1">
            <img style={styles.img} src={portfolio} alt="mypic"/>
              <p class="corner text-left">Portfolio</p>
            </div>
          </a>
          <a href=" https://addnotes.herokuapp.com/" target="_blank">
            <div class="box-1">
            <img style={styles.img} src={notes} alt="mypic"/>
              <p class="corner text-left">Notes-taker</p>
            </div>
          </a>
          <a href=" https://vkyamini.github.io/daily-Calendar/" target="_blank">
            <div class="box-1">
            <img style={styles.img} src={cal} alt="mypic"/>
              <p class="corner text-left">daily-calendar</p>
            </div>
          </a>
         </div>
      </div>
  
    )
}