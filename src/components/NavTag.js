import React from 'react';
import { Link } from "react-router-dom";


export default function navtags () {

    const styles={

        navbar:{
           
            display:"flex",
            color:"blue",
            justifyContent: "space-between",
            listStyleType: "none",
           },

        head:{
             
             textAlign:"center",
             color:'blue'
        } 
    }


return(
    <div><h1 style={styles.head}>YAMINI's Portfolio</h1>
    <ul className='navbar' style={styles.navbar}>
        <li><Link to="/Home">HOME</Link></li>
        <li><Link to="/AboutMe">AboutMe</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Github">Github and contacts</Link></li>
    </ul>
    <hr/>
   
    
    </div>
    
)



}