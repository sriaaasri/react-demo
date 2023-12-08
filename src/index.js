//importing the required packages 
import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App.js";


// creating a reference to a div in the HTML with id=root

const ele=document.getElementById("root");

//creating a path 

const element = ReactDOM.createRoot(ele);

//creating jsx


//rendering the jsx to the HTML DOM element

element.render(<App />);
