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
import PhotoUploadModal from "../windows/complete.jsx";
import CameraButton from "../btn/CameraButton";

function Page3() {
  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (file, taskId) => {
    const reader = new FileReader();
    reader.onload = () => {
      console.log("Updating tasks for taskId:", taskId);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, image: reader.result } : task
        )
      );
    };
    reader.readAsDataURL(file);
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
        <QuestCotent x={1} />
      </div>
      <div>
        {tasks.map((task) => (
          <CameraButton
            key={task.id}
            taskId={task.id}
            onCapture={handleCapture}
          />
        ))}
      </div>
      <SpotList x={0} isAccordion={true} />
      <StepBtn x={2} />
      <StepBtn x={1} />
      <PhotoUploadModal />
      <div className="page-footer">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
      </div>
    </>
  );
}

export default Page3;
