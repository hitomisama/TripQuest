import React, { useState, useEffect } from 'react';
import '../css/Back.css'; // 引入样式文件

function Back() {
  const images = ["mv_img.png","mv1.png", "mv2.png", "mv3.png", "mv4.png"]; // 图片路径数组
  const [currentIndex, setCurrentIndex] = useState(0); // 当前显示的图片索引

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 循环切换图片
    }, 9000); // 每隔 4 秒切换一次图片

    return () => clearInterval(interval); // 组件卸载时清除定时器
  }, [images.length]);

  return (
    <div className="mv_new">
      <ul>
        {images.map((image, index) => (
          <li
            key={index}
            className={index === currentIndex ? "active" : "hidden"}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Back;