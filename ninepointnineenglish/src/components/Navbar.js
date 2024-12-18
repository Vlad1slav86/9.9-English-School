import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-home"></i> {/* Home icon */}
            <strong>ホーム</strong>
            <br />
            {/* <span>Home</span> */}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa fa-info-circle"></i> {/* About icon */}
            <strong>アバウト</strong>
            <br />
            {/* <span>About</span> */}
          </Link>
        </li>
        <li>
          <Link to="/instructors">
            <i className="fa fa-users"></i> {/* Instructors icon */}
            <strong>講師紹介</strong>
            <br />
            {/* <span>Instructors</span> */}
          </Link>
        </li>
        <li>
          <Link to="/announcements">
            <i className="fa fa-bullhorn"></i> {/* Announcements icon */}
            <strong>お知らせ</strong>
            <br />
            {/* <span>Announcements</span> */}
          </Link>
        </li>
        <li>
        <Link to="/calendar">
          <i className="fa fa-calendar"></i> 
        <strong>カレンダー</strong></Link> 
        <br/>
        {/* <span>Calendar</span> */}
        </li>
        <li>
          <Link to="/contact">
            <i className="fa fa-envelope"></i> {/* Contact icon */}
            <strong>お問い合わせ</strong>
            <br />
            {/* <span>Contact</span> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
