import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      {/* Hamburger Menu Button */}
      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navbar Links */}
      <ul className={menuOpen ? 'active' : ''}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-home"></i>
            <strong>ホーム</strong>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-info-circle"></i>
            <strong>特徴</strong>
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-yen"></i>
            <strong>料金</strong>
          </Link>
        </li>

        <li>
          <Link to="/instructors" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-users"></i>
            <strong>講師紹介</strong>
          </Link>
        </li>
        <li>
          <Link to="/announcements" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-bullhorn"></i>
            <strong>お知らせ</strong>
          </Link>
        </li>
        <li>
          <Link to="/calendar" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-calendar"></i>
            <strong>カレンダー</strong>
          </Link>
        </li>
        <li>
          <Link to="/recruitment" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-briefcase"></i>
            <strong>採用情報</strong>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-envelope"></i>
            <strong>お問い合わせ</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
