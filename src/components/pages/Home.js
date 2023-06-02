import React from 'react';

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
        <div styles={styles.img}> <h1>This is home page</h1>
        <p>This is what my home page looks like</p>
        <br/>
        </div>
       
    )
}