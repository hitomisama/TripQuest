import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { useTaskContext } from "../components/TaskContext.jsx";
import accordionData from "../Date/accordionData.json"; // 引入 JSON 数据
import "../css/Accordion.css"; // 可选：自定义样式文件
import PhotoUploadModal from "../windows/PhotoUploadModal.jsx";
import LocationList from "../btn/LocationList.jsx";

function SpotList({ x, isAccordion = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 控制弹窗显示状态
  const [openIndex, setOpenIndex] = useState(0); // 控制弹窗内折叠栏的默认展开项

  const handleOpenModal = () => {
    setIsModalOpen(true); // 打开弹窗
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 关闭弹窗
    setOpenIndex(0); // 重置折叠栏状态
  };

  const handleToggle = (index) => {
    // 切换折叠项
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // 数据渲染逻辑
  const displayData = isAccordion
    ? accordionData.slice(x, x + 2) // 渲染两条数据
    : accordionData[x]
    ? [accordionData[x]] // 渲染单条数据
    : [];

  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (taskId, base64Image) => {
    // 更新任务列表中的图片
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
    console.log("Updated tasks state:", tasks); // 确认任务列表是否正确更新
  };

  return (
    <div className="spot-list">
      <button className="open-modal-button" onClick={handleOpenModal}>
        Spot
      </button>

      {/* 弹窗 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Spot Details"
      >
        <div className="accordion-container">
          {displayData.map((item, index) => (
            <div key={item.id} className="accordion-item">
              {/* 标题部分 */}
              <div
                className="accordion-header"
                onClick={() => isAccordion && handleToggle(index)}
              >
                <h3>
                  {index + 1 < 10 ? `0${index + 1}` : index + 1} {item.title}
                </h3>
                {/* 根据状态显示箭头方向，仅在折叠模式下生效 */}
                {isAccordion && (
                  <span className="accordion-arrow">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {/* 内容部分，在非折叠模式下直接显示 */}
              {(isAccordion ? openIndex === index : true) && (
                <div className="accordion-content">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="accordion-img"
                  />
                  <p>{item.content}</p>
                  
                </div>
              )}
              {/* 渲染上传按钮 */}
              <PhotoUploadModal taskId={item.id} onUpload={handleCapture} />
              {/* 动态渲染 LocationList，基于 item.id + 4 */}
              <LocationList renderId={item.id + 3} />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default SpotList;