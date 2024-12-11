import React, { useState } from "react";
import "../css/Accordion.css"; // 可选：引入自定义样式文件
import accordionData from '../Date/accordionData.json';
import locations from "../Date/locationsData.json";
import LocationList from "../btn/LocationList.jsx";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0); // 默认展开第一项

  const handleToggle = (index) => {
    // 如果当前点击的是已经展开的内容，则关闭；否则切换到新的内容
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          {/* 标题部分 */}
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            <h3>
              {index + 1 < 10 ? `0${index + 1}` : index + 1} {item.title}
            </h3>
            {/* 根据状态显示箭头方向 */}
            <span className="accordion-arrow">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>

          {/* 内容部分，只有在展开状态下才显示 */}
          {openIndex === index && (
            <div className="accordion-content">
              <img src={item.img} alt={item.title} className="accordion-img" />
              <p>{item.content}</p>

              {/* 动态渲染导航按钮，根据地点 ID  */}
              {index >= 3 && index <= 7 && (
                <>
                  {console.log(`Rendering LocationList for renderId: ${index + 2}`)}
                  <LocationList renderId={index + 2} />
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;