import React from "react";
import "./style.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Memory Game!
      </a>
    </nav>
  );
}

export default Header;