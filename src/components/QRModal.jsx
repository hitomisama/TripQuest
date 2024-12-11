import React from "react";

function QRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>全クエストクリア！おめでとうございます！</h2>
        <p>この画面をスタッフにお見せいただき、スペシャル抹茶券と交換してください。</p>
        <img src="/path-to-your-qr-code.png" alt="QRコード" />
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
}

export default QRModal;