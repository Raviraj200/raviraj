import React from "react";
import './App.css';

function Time(){
    const date = new Date();
    const hour = date.getHours();
    

    return(
        <div className="text2 text-white mt-40 position-relative fs-1 ">
            {hour>=12 ? hour>=18 ? <h2> Good Evening</h2> : <h2>Good Afternoon</h2> : <h2>Good Morning</h2>}

        </div>
     

    )
}
export default Time;