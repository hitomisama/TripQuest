import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header2.css";
import Menu from "../windows/Menu";

function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制 Menu 是否打开

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 切换 Menu 的显示状态
  };

  return (
    <>
      <div className="Header2">
        <Link to="/">
          <img src="/TripQuest.png" alt="TripQuest" className="TripQuest" />
        </Link>
        <div className="menu" onClick={toggleMenu}>
          <img src="/leaf.png" alt="葉" />
          <p className="English">menu</p>
        </div>
      </div>

      {/* Menu 组件 */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Header2;