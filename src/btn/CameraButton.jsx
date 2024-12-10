import React, { useRef } from "react";

function CameraButton({ onCapture }) {
  const fileInputRef = useRef(null);

  const handleCapture = (event) => {
    const file = event.target.files[0];
    if (file && onCapture) {
      onCapture(file);
    }
  };

  return (
    <div className="camera-container">
      <button className="camera-button" onClick={() => fileInputRef.current.click()}>
        写真を撮る
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