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
             background:"pink",
             textAlign:"center",
             color:'blue'
        } 
    }


return(
    <div><h1 style={styles.head}>Welcome to YAMINI Porfolio</h1>
    <ul className='navbar' style={styles.navbar}>
        <li><Link to="/Home">HOME</Link></li>
        <li><Link to="/AboutMe">AboutMe</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Github">Github</Link></li>
    </ul>
   
    
    </div>
    
)



}