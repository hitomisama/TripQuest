import React, { useState } from "react";
import Modal from "./Modal.jsx";
import accordionData from "../Date/accordionData.json"; // 引入 JSON 数据

function SpotList({ x }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 控制弹窗显示状态
  const [selectedSpot, setSelectedSpot] = useState(null); // 当前选中的地点
  const [selectedIndex, setSelectedIndex] = useState(null); // 当前选中的索引

  const handleOpenModal = (spot, index) => {
    setSelectedSpot(spot); // 设置选中的地点
    setSelectedIndex(index); // 设置选中的索引
    setIsModalOpen(true); // 打开弹窗
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 关闭弹窗
    setSelectedSpot(null); // 清空选中的地点
    setSelectedIndex(null); // 清空选中的索引
  };

  return (
    <div className="spot-list">
      {/* 只渲染指定的按钮 */}
      {accordionData[x] && (
        <div className="spot-item">
          <button
            className="open-modal-button"
            onClick={() => handleOpenModal(accordionData[x], x)} // 打开弹窗
          >
            Spot
          </button>
        </div>
      )}

      {/* 弹窗 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedSpot?.title}
      >
        {selectedSpot && (
          <>
            <h3>
              {selectedIndex + 1 < 10
                ? `0${selectedIndex + 1}`
                : selectedIndex + 1}
            </h3>
            <h3>{selectedSpot.title}</h3>
            <img
              src={selectedSpot.img}
              alt={selectedSpot.title}
              className="modal-image"
            />
            <p>{selectedSpot.content}</p>
          </>
        )}
      </Modal>
    </div>
  );
}

export default SpotList;
