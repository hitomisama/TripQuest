import React, { useRef } from "react";

function UploadButton({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="upload-container" onClick={() => fileInputRef.current.click()}>
      <img src="upload-placeholder.png" alt="タップしてアプロッド" className="upload-image" />
      <p className="upload-text">タップしてアプロッド</p>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleUpload}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default UploadButton;