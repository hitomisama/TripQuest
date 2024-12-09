import React from "react";

function CameraButton({ onClick }) {
  const handleOpenCamera = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="camera-button" onClick={handleOpenCamera}>
      カメラを起動
    </button>
  );
}

export default CameraButton;