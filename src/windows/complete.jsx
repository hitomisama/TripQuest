import React, { useState } from "react";
import CompleteModal from "./CompleteModal.jsx";
import UploadButton from "../btn/UploadButton.jsx";
import CameraButton from "../btn/CameraButton.jsx";
import PostButton from "../btn/PostButton.jsx";

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
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCameraOpen = () => {
    console.log("Camera button clicked");
  };

  const handlePostToX = () => {
    if (uploadedFile) {
      console.log("Posting to X:", uploadedFile);
      alert("投稿が完了しました！");
    } else {
      alert("写真を選択してください！");
    }
  };

  const handlePostToInstagram = () => {
    if (uploadedFile) {
      console.log("Posting to Instagram:", uploadedFile);
      alert("Instagram投稿が完了しました！");
    } else {
      alert("写真を選択してください！");
    }
  };

  return (
    <div className="photo-upload">
      <button onClick={handleOpenModal}>Open Upload Modal</button>
      <CompleteModal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>写真を投稿</h2>
        <div className="upload-section">
          <UploadButton onUpload={handleUpload} />
          <CameraButton onCapture={handleUpload} />
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