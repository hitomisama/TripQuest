import React, { useState, useEffect } from "react";
import "../css/ScrollToTopButton.css";

const ScrollToTopButton = ({ imgSrc = "/top.png" }) => {
  const [isVisible, setIsVisible] = useState(false); // 按钮是否可见
  const [isScrolling, setIsScrolling] = useState(false); // 是否正在滚动
  let scrollTimeout;

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // 当前滚动高度
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight; // 可滚动总高度

    // 当页面滚动超过一半时显示按钮
    setIsVisible(scrollTop > scrollHeight / 2);

    // 滚动时隐藏按钮
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // 清理定时器
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top-container ${
        isVisible && !isScrolling ? "visible" : "hidden"
      }`}
      onClick={handleClick}
    >
      <img src={imgSrc} alt="Back to Top" className="scroll-to-top-icon" />
    </div>
  );
};

export default ScrollToTopButton;