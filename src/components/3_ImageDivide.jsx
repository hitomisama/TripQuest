import React, { useEffect, useRef } from 'react';
import '../css/ImageDivide.css';

function ImageDivide() {
  const images = ['/divide1.jpg', '/divide2.jpg', '/divide3.jpg', '/divide4.jpg'];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    // 初始化图片：复制原始图片两份以实现无缝滚动
    const initializeInfiniteScroll = () => {
      const clones = [...images, ...images]; // 复制两份
      container.innerHTML = ''; // 清空容器
      clones.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image Clone ${index + 1}`;
        img.className = 'image-clone';
        container.appendChild(img);
      });
    };

    initializeInfiniteScroll();

    // 自动滚动函数
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1; // 每次滚动 1 像素

        // 当滚动到一半（第一组图片完全不可见时），无缝重置位置
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // 重置为起始位置
        }
      }, 16); // 每次滚动 16 毫秒，实现平滑连续滚动
    };

    startAutoScroll();

    // 鼠标悬停暂停滚动
    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(scrollInterval); // 清理定时器
      container.removeEventListener('mouseenter', stopAutoScroll);
      container.removeEventListener('mouseleave', startAutoScroll);
    };
  }, [images]);

  return (
    <div className="image-scroll-container">
      <div className="ImageDivide" ref={containerRef}>
        {/* 原始图片 */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageDivide;