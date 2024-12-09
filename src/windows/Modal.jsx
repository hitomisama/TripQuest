import React from "react";
import "../css/Modal.css"; // 确保样式文件路径正确

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; // 如果未打开，不渲染内容

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <span>{title}</span>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;