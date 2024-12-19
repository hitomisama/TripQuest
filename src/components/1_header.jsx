import React from 'react';
import { Link } from 'react-router-dom';
import '../css/1_header.css';

function Header() {
  return (
    <>
      <div className="Header">
        <Link to="/">
          <img src="/TripQuest.png" alt="TripQuest" className="TripQuest" />
        </Link>
        <Link to="/">
          <img src="/LOGO.png" alt="Logo" className="Logo" />
        </Link>
      </div>
    </>
  );
}

export default Header;