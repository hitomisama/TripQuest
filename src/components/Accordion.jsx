import React, { useState } from "react";
import "../css/Accordion.css"; // 可选：引入自定义样式文件
import accordionData from "../Date/accordionData.json";
import locations from "../Date/locationsData.json";
import LocationList from "../btn/LocationList.jsx";
import PhotoUploadModal from "../windows/PhotoUploadModal.jsx";
import { useTaskContext } from "../components/TaskContext.jsx";

function Accordion() {
  const { tasks, setTasks } = useTaskContext(); // 从上下文获取任务列表
  const [openIndex, setOpenIndex] = useState(0); // 默认展开第一项

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCapture = (taskId, base64Image) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
    console.log("Updated tasks state:", tasks);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          {/* 标题部分 */}
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
            <h3> {item.title}</h3>
            <span className="accordion-arrow">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>

          {/* 内容部分，只有在展开状态下才显示 */}
          {openIndex === index && (
            <div className="accordion-content">
              <img src={item.img} alt={item.title} className="accordion-img" />
              <h5>{item.content}</h5>

              <div className="step-btn">
                <PhotoUploadModal taskId={item.id} onUpload={handleCapture} />

                {index + 4 <= locations.length && (
                  <>
                    {console.log(
                      `Rendering LocationList for renderId: ${index + 4}`
                    )}
                    <LocationList renderId={index + 4} />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
