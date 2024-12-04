import React from 'react';
import './App.css';

import img01 from '/public/img1.jpg';
import img02 from '/public/img2.jpeg';
import img03 from '/public/img3.jpeg';
import img04 from '/public/img4.jpeg';



function ImageDivide() {

    const images = [img01, img02, img03,img04]; // 存储图片导入变量
    
    return(
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
