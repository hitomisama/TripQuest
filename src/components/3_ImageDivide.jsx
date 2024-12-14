import React, { useEffect, useRef } from 'react';
import '../css/ImageDivide.css';

function ImageDivide() {
  const images = ['/img1.jpg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg'];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    // 复制图片数组实现无缝循环
    const initializeInfiniteScroll = () => {
      const clones = images.map((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image Clone ${index + 1}`;
        img.className = 'image-clone'; // 添加类名
        return img;
      });
      clones.forEach((clone) => container.appendChild(clone));
    };

    initializeInfiniteScroll();

    // 自动滚动函数
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollBy({ left: 1, behavior: 'smooth' });

        // 滚动到原图末尾时无缝回到开头
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
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
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageDivide;