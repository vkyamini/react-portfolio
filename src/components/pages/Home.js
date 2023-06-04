import React from 'react';
import image from "../../assets/myimage.jpg"

export default function Home(){
    const styles={

        footer:{
            fontSize:"12px",
            display:"flex",
            
            justifyContent: "space-between",
            listStyleType: "none",
           },
           img:{
            backgroundColor: 'blue',
           }
}
    return(
     <div>
       <h1>Welcome , i'm V.K YAMINI</h1>
        <div>
        <div>
        <div>
      <img src={image} alt="mypic"/>
    </div>
        </div>
        <p>I'm currently happy student of the Coding Bootcamp at University of Washington.</p>
        <p>Other than coding, I also enjoy meditating and volunteering as a <a href="https://heartfulness.org/us/" target="_blank">Heartfulness</a> meditation trainer.</p>
        <p>I always look forward to learning new things.</p>
      </div>
     </div>
            


       
      
       
       
    )
}