import React from "react";
import "../css/Modal.css"; // 确保样式文件正确

function CompleteModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default CompleteModal;