import React, { useEffect, useState } from "react";
import Display from "./Display";


function App(){
    const [time , setTime]= useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        setTime(new Date().toLocaleTimeString());

    } , [time])
    return <div>
    <h1>time is:</h1>
    <h1>{time}</h1>
    <Display/>
    </div>
}

export default App;
