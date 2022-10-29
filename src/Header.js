 import React from "react";
 import reactLogo from "./images/react-logo.png"
 function Header(){
    return(    
          <nav className="nav">
            <img src={reactLogo} className="nav-logo" alt="logo"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
          </nav>   
    )
  }

  export default Header;