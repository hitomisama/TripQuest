import React from 'react';
import './App.css';
import TQ from '../public/TripQuest.png';
import Logo from "../public/LOGO.png"

function TOP() {
  return (
    <>
      <div className="TripQuest">
      <img src={TQ} alt="TripQuest" className="TripQuest" />
      <img src={Logo} alt="Logo" className='Logo'/>
      </div>
    </>
  );
}

export default TOP;