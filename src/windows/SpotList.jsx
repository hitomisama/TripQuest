import React, { useEffect, useState, useRef } from "react";
import Modal from "./Modal.jsx";
import { useTaskContext } from "../components/TaskContext.jsx";
import accordionData from "../Date/accordionData.json";
import "../css/Accordion.css";
import PhotoUploadModal from "../windows/PhotoUploadModal.jsx";
import LocationList from "../btn/LocationList.jsx";

function SpotList({ x, isAccordion = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // 控制按钮显示状态
  const scrollTimeoutRef = useRef(null); // 使用 useRef 存储定时器 ID

  useEffect(() => {
    // 滚动事件监听
    const handleScroll = () => {
      setIsVisible(false); // 滑动时隐藏
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current); // 清除上一个定时器
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true); // 停留指定时间后显示
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current); // 清理定时器
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOpenIndex(0);
  };

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const displayData = isAccordion
    ? accordionData.slice(x, x + 2)
    : accordionData[x]
    ? [accordionData[x]]
    : [];

  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (taskId, base64Image) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
  };

  return (
    <div>
      {/* 圆形按钮 */}
      <div
        className={`spot-list ${isVisible ? "" : "hidden"}`}
        onClick={handleOpenModal}
      >
        Spot
      </div>

      {/* 模态框 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Spot Details"
      >
        <div className="accordion-container">
          {displayData.map((item, index) => (
            <div key={item.id} className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => isAccordion && handleToggle(index)}
              >
                <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                <h3>{item.title}</h3>

                {isAccordion && (
                  <span className="accordion-arrow">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                )}

                <div className="modal-close" onClick={handleCloseModal}>
                  ×
                </div>
              </div>
              {(isAccordion ? openIndex === index : true) && (
                <div className="accordion-content">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="accordion-img"
                  />
                  <p>{item.content}</p>
                  <div className="spot-btn">
                    <PhotoUploadModal taskId={5} onUpload={handleCapture} />
                    <LocationList renderId={item.id + 3} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default SpotList;
