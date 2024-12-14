import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/header2.css";

function Header2() {
  const [isSticky, setIsSticky] = useState(false); // 是否固定状态
  const headerRef = useRef(null); // 引用 Header2 元素
  const placeholderRef = useRef(null); // 用于占位的元素

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top; // 获取 Header 的顶部位置
        const placeholderTop = placeholderRef.current.getBoundingClientRect().top; // 占位元素的顶部位置
        setIsSticky(headerTop <= 0 && placeholderTop <= 0); // 如果 Header 到达屏幕顶部且占位元素顶部小于等于 0，则固定
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 占位元素，用于避免页面跳动 */}
      <div
        ref={placeholderRef}
        style={{
          height: isSticky ? `${headerRef.current?.offsetHeight || 0}px` : 0,
        }}
      ></div>

      <div
        ref={headerRef} // 绑定 Header2 的引用
        className={`Header2 ${isSticky ? "sticky" : ""}`}
      >
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