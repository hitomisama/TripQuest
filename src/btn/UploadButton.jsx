import React, { useRef } from "react";

function UploadButton({ taskId, onUpload }) {
  const fileInputRef = useRef(null); // 创建对文件输入的引用

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("按钮上传: 文件上传到任务:", taskId, file); // Debug log
    if (file && onUpload) {
      onUpload(file, taskId); // 调用父组件的回调函数，将文件和任务 ID 传递出去
    }
  };

  return (
    <div className="upload-container">
      <div
        className="btn-upload"
        onClick={() => fileInputRef.current.click()} // 模拟点击文件输入框
      >
        タップしてアプロッド
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef} // 关联文件输入框的引用
        onChange={handleFileChange} // 文件选择后的回调
        style={{ display: "none" }} // 隐藏原始的文件输入框
      />
    </div>
  );
}

export default UploadButton;
