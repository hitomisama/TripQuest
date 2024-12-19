import React, { useRef } from "react";

function CameraButton({ taskId, onCapture }) {
  const fileInputRef = useRef(null);

  const handleCapture = (event) => {
    const file = event.target.files[0];
    console.log("Captured file for taskId:", taskId, file); // Debug log
    if (file && onCapture) {
      onCapture(file, taskId);
    }
  };

  return (
    <div className="camera-container">
      <div
        className="btn"
        onClick={() => fileInputRef.current.click()}
      >
        写真を撮る
      </div>
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