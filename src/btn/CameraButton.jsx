import React, { useRef, useState } from "react";

function CameraButton() {
  const videoRef = useRef(null);
  const [cameraStream, setCameraStream] = useState(null);

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream; // 将流传递到 <video> 元素
      setCameraStream(stream); // 保存流以便停止使用
    } catch (error) {
      console.error("Failed to access camera:", error);
      alert("摄像头访问失败，请检查设备权限！");
    }
  };

  const handleStopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop()); // 停止流
      setCameraStream(null); // 清空状态
    }
  };

  return (
    <div>
      {!cameraStream ? (
        <button onClick={handleOpenCamera}>打开相机</button>
      ) : (
        <>
          <video ref={videoRef} autoPlay style={{ width: "100%" }}></video>
          <button onClick={handleStopCamera}>关闭相机</button>
        </>
      )}
    </div>
  );
}

export default CameraButton;