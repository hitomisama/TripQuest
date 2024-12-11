import React, { useState } from "react";
import CompleteModal from "./CompleteModal.jsx";
import UploadButton from "../btn/UploadButton.jsx";
import CameraButton from "../btn/CameraButton.jsx";
import PostButton from "../btn/PostButton.jsx";

function PhotoUploadModal({ taskId, onUpload }) {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedFile(reader.result); // 设置当前任务点的图片
      if (onUpload) {
        onUpload(taskId, reader.result); // 将任务点ID和图片传递给父组件
      }
    };
    if (file instanceof Blob) {
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handlePostToX = () => {
    if (uploadedFile) {
      console.log(`Posting photo for Task ${taskId} to X:`, uploadedFile);
      alert(`Task ${taskId} 投稿が完了しました！`);
    } else {
      alert("写真を選択してください！");
    }
  };

  const handlePostToInstagram = () => {
    if (uploadedFile) {
      console.log(`Posting photo for Task ${taskId} to Instagram:`, uploadedFile);
      alert(`Task ${taskId} Instagram投稿が完了しました！`);
    } else {
      alert("写真を選択してください！");
    }
  };

  return (
    <div className="photo-upload">
      <button onClick={handleOpenModal}>クリア (Task {taskId})</button>
      <CompleteModal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Task {taskId} - 写真を投稿</h2>
        <div className="upload-section">
          <UploadButton onUpload={handleUpload} />
          <CameraButton taskId={taskId} onCapture={handleUpload} />
        </div>
        <div className="post-section">
          <PostButton text="Xに投稿" onClick={handlePostToX} />
          <PostButton text="Instagramに投稿" onClick={handlePostToInstagram} />
        </div>
      </CompleteModal>
    </div>
  );
}

export default PhotoUploadModal;