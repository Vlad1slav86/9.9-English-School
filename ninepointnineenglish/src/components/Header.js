import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/tl_eikaiwa.gif" alt="NinePointNine English Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#instructors">Instructors</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
