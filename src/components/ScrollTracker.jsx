import React, { useState, useEffect } from "react";
import "../css/ScrollTracker.css";

function ScrollTracker() {
  const [scrollPercentage, setScrollPercentage] = useState(0); // 滚动百分比
  const [isVisible, setIsVisible] = useState(false); // 是否显示组件
  const [isFirstScreen, setIsFirstScreen] = useState(true); // 是否在第一个屏幕界面
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop; // 当前滚动高度
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight; // 可滚动总高度
      const percentage = scrollHeight > 0 ? scrollTop / scrollHeight : 0; // 计算滚动百分比

      setScrollPercentage(percentage); // 更新滚动百分比

      // 判断是否还在第一个屏幕界面
      setIsFirstScreen(scrollTop === 0);

      setIsVisible(true); // 滚动时显示组件
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(false), 1500); // 停止滚动后隐藏组件
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // 清理计时器
    };
  }, []);

  const maxIndicatorHeight = 100; // 竖线高度
  const blockHeight = 20; // 白色方块固定高度
  const maxTop = maxIndicatorHeight - blockHeight; // 限制白色方块不能超出竖线底部
  const topPosition = Math.min(scrollPercentage * maxIndicatorHeight, maxTop); // 计算白色方块的 `top` 值

  return (
    <div
      className="scroll-tracker"
      style={{
        opacity: isVisible || isFirstScreen ? 1 : 0, // 如果在第一个屏幕或滚动中，则显示
        transition: "opacity 0.3s ease", // 平滑过渡显示/隐藏
      }}
    >
      <div
        className="scroll-position"
        style={{
          top: `${topPosition}px`, // 白色方块的动态位置
          height: `${blockHeight}px`, // 固定的方块高度
        }}
      ></div>
    </div>
  );
}

export default ScrollTracker;