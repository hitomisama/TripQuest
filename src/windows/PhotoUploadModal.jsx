import React, { useState } from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import CompleteModal from "./CompleteModal.jsx";
import UploadButton from "../btn/UploadButton.jsx";
import CameraButton from "../btn/CameraButton.jsx";
import PostButton from "../btn/PostButton.jsx";

function PhotoUploadModal({ taskId, onUpload }) {
  const { tasks } = useTaskContext();
  const task = tasks.find((t) => t.id === taskId);
  const defaultImage = task?.image || "/LOGO.png"; // 确保默认图片始终有效
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (onUpload) {
        onUpload(taskId, reader.result); // 通知父组件更新图片
      }
    };
    if (file instanceof Blob) {
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  return (
    <div className="photo-upload">
      {/* 按钮，打开模态框 */}
      <div className="btn" onClick={handleOpenModal}>
        <h4>クリア</h4>
        <div className="arrow"></div>
      </div>

      {/* 模态框 */}
      <CompleteModal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="modal-header">
          <div className="quest-close" onClick={handleCloseModal}>
            ×
          </div>
        </div>

        <div className="upload-section">
          {/* 照片显示 */}
          <img
            src={defaultImage}
            alt={`任务 ${taskId}`}
            className="uploaded-image"
          />

          {/* 上传和拍摄功能 */}
          <UploadButton taskId={taskId} onUpload={handleUpload} />
          <CameraButton taskId={taskId} onCapture={handleUpload} />
        </div>

        <div className="post-section">
          {/* 分享功能 */}
          <PostButton
            text="Xにシェア"
            onClick={() => {
              const shareText = encodeURIComponent(
                "全クエストクリア！スペシャル抹茶券をゲットしました！"
              ); // 分享文本
              const shareURL = encodeURIComponent("https://example.com"); // 分享的链接
              const twitterURL = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareURL}`;

              window.open(twitterURL, "_blank", "noopener,noreferrer"); // 在新窗口打开分享链接
            }}
          />
          <PostButton
            text="インスタにシェア"
            onClick={() => {
              const instagramURL = "https://instagram.com"; // Instagram 的 Web 页面 URL
              window.open(instagramURL, "_blank", "noopener,noreferrer"); // 在新窗口打开 Instagram
            }}
          />{" "}
        </div>
      </CompleteModal>
    </div>
  );
}

export default PhotoUploadModal;
