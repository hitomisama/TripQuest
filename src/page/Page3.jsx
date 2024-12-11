import React from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import Ttl from "../components/4_ttl.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
import buttonData from "../Date/btnDate.json";
import Top from "../components/Top.jsx";
import QuestCotent from "../components/questcontent.jsx";
import StepBtn from "../btn/ClearBtn.jsx";
import SpotList from "../windows/SpotList.jsx";
import PhotoUploadModal from "../windows/PhotoUploadModal.jsx";
import CameraButton from "../btn/CameraButton";

function Page3() {
  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (taskId, base64Image) => {
    console.log(`任务 ${taskId} 上传了图片`);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
  };

  console.log("Rendering Page3 with tasks:", tasks);

  return (
    <>
      <div className="top">
        <Top x={1} />
      </div>
      <Ttl x={6} />
      <div className="quest-section">
        <QuestCotent x={0} />
        <PhotoUploadModal taskId={1} onUpload={handleCapture} />

        <QuestCotent x={1} />
        <PhotoUploadModal taskId={2} onUpload={handleCapture} />

      </div>

      <SpotList x={0} isAccordion={true} />



      <div className="page-footer">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
      </div>
    </>
  );
}

export default Page3;
