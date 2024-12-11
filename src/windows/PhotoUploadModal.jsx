import React, { useState } from "react";
import CompleteModal from "./CompleteModal.jsx";
import UploadButton from "../btn/UploadButton.jsx";
import CameraButton from "../btn/CameraButton.jsx";
import PostButton from "../btn/PostButton.jsx";

function PhotoUploadModal({ taskId, onUpload }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (onUpload) {
        onUpload(taskId, reader.result); // 上传后更新对应任务点
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
      <button onClick={handleOpenModal}>上传照片 (任务 {taskId})</button>
      <CompleteModal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>任务 {taskId} - 上传照片</h2>
        <div className="upload-section">
          <UploadButton onUpload={handleUpload} />
          <CameraButton taskId={taskId} onCapture={handleUpload} />
        </div>
        <div className="post-section">
          <PostButton text="发布到X" onClick={() => console.log(`发布到X: 任务 ${taskId}`)} />
          <PostButton
            text="发布到Instagram"
            onClick={() => console.log(`发布到Instagram: 任务 ${taskId}`)}
          />
        </div>
      </CompleteModal>
    </div>
  );
}

export default PhotoUploadModal;