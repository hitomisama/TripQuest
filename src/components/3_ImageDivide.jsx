import React from 'react';

function ImageDivide() {
  // 使用 public 目录下的图片路径
  const images = ['/img1.jpg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg'];

  return (
    <>
      <div className="ImageDivide">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </>
  );
}

export default ImageDivide;