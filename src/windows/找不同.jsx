import React, { useState } from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import CompleteModal from "./CompleteModal.jsx";
import UploadButton from "../btn/UploadButton.jsx";
import CameraButton from "../btn/CameraButton.jsx";
import PostButton from "../btn/PostButton.jsx";

function PhotoUploadModal({ taskId, onUpload }) {
  const { tasks } = useTaskContext(); // 获取任务上下文
  const task = tasks.find((t) => t.id === taskId); // 获取当前任务
  const defaultImage = task?.image || "/LOGO.png"; // 默认图片路径
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
        onUpload(taskId, reader.result); // 上传后通知父组件更新任务点照片
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
          {/* 照片显示区域 */}
          <img
            src={defaultImage}
            alt={`任务 ${taskId}`}
            className="uploaded-image"
            style={{ width: "100%", height: "auto", marginBottom: "20px" }}
          />
          <UploadButton
            taskId={1}
            onUpload={(file, taskId) =>
              console.log(`Task ${taskId} uploaded file:`, file)
            }
          />
          <CameraButton taskId={taskId} onCapture={handleUpload} />
        </div>
        <div className="post-section">
          <PostButton
            text="发布到X"
            onClick={() =>
              console.log(`发布到X: 任务 ${taskId} 照片 ->`, defaultImage)
            }
          />
          <PostButton
            text="发布到Instagram"
            onClick={() =>
              console.log(
                `发布到Instagram: 任务 ${taskId} 照片 ->`,
                defaultImage
              )
            }
          />
        </div>
      </CompleteModal>
    </div>
  );
}

export default PhotoUploadModal;
