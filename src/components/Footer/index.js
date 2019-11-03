import React from "react";
import "./style.css";

function Footer(props){
        return (
            
         <nav className="navbar fixed-bottom footer">
             <a {...props}> Github Source</a>
         </nav>
        )
    
};

export default Footer;

