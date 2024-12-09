import React, { useState } from "react";
import CompleteModal from "./CompleteModal";
import UploadButton from "../btn/UploadButton";
import CameraButton from "../btn/CameraButton";
import PostButton from "../btn/PostButton";



function PhotoUploadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUpload = (file) => {
    setUploadedFile(file);
    console.log("Uploaded file:", file);
  };

  const handleCameraOpen = () => {
    console.log("Camera button clicked");
    // 唤起相机的逻辑（视浏览器支持情况）
  };

  const handlePostToX = () => {
    console.log("Post to X:", uploadedFile);
    // 提交到指定目标的逻辑
  };

  const handlePostToInstagram = () => {
    console.log("Post to Instagram:", uploadedFile);
    // 提交到 Instagram 的逻辑
  };

  return (
    <div className="photo-upload">
      <button onClick={handleOpenModal}>Open Upload Modal</button>
      <CompleteModal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>写真を投稿</h2>
        <UploadButton onUpload={handleUpload} />
        <CameraButton onClick={handleCameraOpen} />
        <PostButton text="Xに投稿" onClick={handlePostToX} />
        <PostButton text="Instagramに投稿" onClick={handlePostToInstagram} />
      </CompleteModal>
    </div>
  );
}

export default PhotoUploadModal;