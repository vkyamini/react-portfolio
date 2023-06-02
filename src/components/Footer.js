import React from 'react';
import { Link } from "react-router-dom";


export default function navtags () {
    const styles={

        footer:{
            fontSize:"12px",
            display:"flex",
            justifyContent: "space-between",
            listStyleType: "none",
           }
}
   

return(
    <div>
         <hr/>
    <ul style={styles.footer}>
        <li><Link to="/Home">HOME</Link></li>
        <li><Link to="/AboutMe">AboutMe</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Github">Github and contacts</Link></li>
    </ul>
    <hr/>
   
    
    </div>
    
)



}