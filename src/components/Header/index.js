import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <a className="navbar-brand" href="/">
                Memory Game!
                </a>
                <div style={{ margin: '30px' }}><h5>Score: {props.score}</h5></div>
                <div style={{ margin: '30px' }}><h5>Hi-Score: {props.highscore}</h5></div>
        </nav>
    );
}

export default Header;