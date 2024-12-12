import React from "react";
import { Link } from "react-router-dom"; // 引入 Link 组件用于跳转
import { useTaskContext } from "../components/TaskContext.jsx";
import Ttl from "../components/4_ttl.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
import buttonData from "../Date/btnDate.json";
import Top from "../components/Top.jsx";
import QuestCotent from "../components/questcontent.jsx";
import SpotList from "../windows/SpotList.jsx";
import PhotoUploadModal from "../windows/PhotoUploadModal.jsx";
import LocationList from "../btn/LocationList.jsx";
import Header2 from "../components/header2.jsx";
import Header from "../components/1_header.jsx";

function Page3() {
  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (taskId, base64Image) => {
    // console.log(`Uploading image for Task ${taskId}:`, base64Image); // 检查 Base64 数据是否正确
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
    console.log("Updated tasks state:", tasks); // 确认任务列表是否正确更新
  };

  console.log("Rendering Page3 with tasks:", tasks);

  return (
    <>
      <Header />
      <div className="top">
        <Top x={1} />
      </div>
      <Header2 />
      <Ttl x={6} />
      <LocationList renderId={1} />
      <div className="quest-section">
        <QuestCotent x={0} />
        <PhotoUploadModal taskId={1} onUpload={handleCapture} />

        <QuestCotent x={1} />
        <PhotoUploadModal taskId={2} onUpload={handleCapture} />
      </div>

      <SpotList x={0} isAccordion={true} />

      {/* 跳转按钮 */}
      <div className="stepleft">
        <Link to="/Page5" style={{ textDecoration: "none", fontSize: "18px" }}>
          <p className="e1">⬅️ Stp3</p>
        </Link>
      </div>
      <div className="setpright">
        <Link to="/Page4" style={{ textDecoration: "none", fontSize: "18px" }}>
          <p className="e1">Stp2 →</p>
        </Link>
      </div>

      <div className="page-footer">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
      </div>
    </>
  );
}

export default Page3;
