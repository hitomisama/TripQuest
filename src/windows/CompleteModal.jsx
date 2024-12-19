import React from "react";
import "../css/Modal.css";

function CompleteModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* 关闭按钮 */}

        {/* 渲染子组件 */}
        {children}
      </div>
    </div>
  );
}

export default CompleteModal;