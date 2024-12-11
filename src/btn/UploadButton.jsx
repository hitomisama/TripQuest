import React from "react";

function UploadButton({ taskId,onUpload }) {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("按钮上传", file);
    if (file && onUpload) {
      onUpload(file,taskId); // 传递文件到父组件
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