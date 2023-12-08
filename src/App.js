import React, { useEffect, useState } from "react";


function App(){
    const [time , setTime]= useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        setTime(new Date().toLocaleTimeString());

    } , [time])
    return <>
    <h1>time is:</h1>
    <h1>{time}</h1>
    </>
}

export default App;
