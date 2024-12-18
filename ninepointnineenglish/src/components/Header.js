import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";
import logoImage from "../images/tl_eikaiwa.gif"; 

const Header = () => {
  return (
    <header>
      {/* Wrap logo in a Link component to make it clickable and navigate to the home page */}
      <Link to="/" className="logo-link">
        <div className="logo" style={{ backgroundImage: `url(${logoImage})` }}></div>
      </Link>
      <p>It's a bright choice!</p>
    </header>
  );
};

export default Header;
