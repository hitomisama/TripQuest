import React, { useRef } from "react";

function CameraButton({ onCapture, taskId }) {
  const fileInputRef = useRef(null);

  const handleCapture = (event) => {
    const file = event.target.files[0];
    if (file && onCapture) {
      onCapture(file, taskId); // 传递照片和任务 ID
    }
  };

  return (
    <div className="camera-container">
      <button
        className="camera-button"
        onClick={() => fileInputRef.current.click()}
      >
        打开相机
      </button>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        onChange={handleCapture}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default CameraButton;