import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <strong>ホーム</strong>
            <br />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <strong>アバウト</strong>
            <br />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/instructors">
            <strong>講師紹介</strong>
            <br />
            <span>Instructors</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <strong>お問い合わせ</strong>
            <br />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
