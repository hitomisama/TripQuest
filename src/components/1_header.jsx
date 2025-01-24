import React from 'react';
import { Link } from 'react-router-dom';
import '../css/1_header.css';

function Header({ scrollTop }) {
  // 计算 Header 的透明度（越往上滚，越透明）
  // const opacity = Math.max(0, 1 - Math.abs(scrollTop) / 750);

  // 计算 Header 的 `Y` 轴移动距离
  const translateY = Math.min(0, scrollTop + 750); // 向上移动

  return (
    <div 
      className="Header" 
      style={{ 
        // opacity: opacity, 
        transform: `translateY(${translateY}px)`, //  上移效果
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out" // 平滑动画
      }}
    >
      <Link to="/">
        <img src="/TripQuest.png" alt="TripQuest" className="TripQuest" />
      </Link>
      <Link to="/">
        <img src="/LOGO.png" alt="Logo" className="Logo" />
      </Link>
    </div>
  );
}

export default Header;