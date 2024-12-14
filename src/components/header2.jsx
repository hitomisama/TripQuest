import React from "react";
import { Link } from "react-router-dom";
import "../css/1_header.css";

function Header2() {
  return (
    <>
      <div className="Header">
        <Link to="/">
          <img src="/TripQuest.png" alt="TripQuest" className="TripQuest" />
        </Link>
        <Link to="">
          <div className="menu">
          <img src="/leaf.png" alt="葉" />
          <p className="English">menu</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header2;
