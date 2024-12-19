import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // 使用 named export
import '../css/QRModal.css';

function QRModal({ isOpen, onClose, qrContent }) {
  if (!isOpen) return null; // 如果模态框未打开，则不渲染

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-QR" onClick={(e) => e.stopPropagation()}>
        {/* 关闭按钮 */}
        <div className="closebtn" onClick={onClose}>
          ×
        </div>
        {/* 二维码 */}
        <QRCodeCanvas
          value={qrContent} // 二维码内容
          size={200} // 二维码大小
          bgColor="#FFFFFF" // 背景色
          fgColor="#000000" // 前景色
          className="QR"
        />
        {/* 标题和描述 */}
        <div className="QRcontent">
        <h4 className="QRmoji">全クエストクリア!</h4>
        <h4 className="QRmoji">おめでとうございます！</h4>
        <h6 className="QRmoji">この画面をスタッフにお見せいただき、</h6>
        <h6 className="QRmoji">スペシャル抹茶券と交換してください。</h6>
        </div>
      </div>
    </div>
  );
}

export default QRModal;