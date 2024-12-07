import React from "react";
import "./Header.css";
import logoImage from "../images/tl_eikaiwa.gif"; 

const Header = () => {
  return (
    <header>
      <div className="logo" style={{ backgroundImage: `url(${logoImage})` }}></div>
      <p>It's a bright choice!</p>
    </header>
  );
};

export default Header;
