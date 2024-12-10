import React from "react";

function UploadButton({ onUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <label className="upload-button">
      写真をアップロード
      <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
    </label>
  );
}

export default UploadButton;