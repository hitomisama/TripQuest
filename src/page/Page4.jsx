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

function Page4() {
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
      <div className="top">
        <Header />

        <Top x={2} />
      </div>
      <Header2 />

      <Ttl x={7}></Ttl>
      <LocationList renderId={2} />

      <QuestCotent x={2} />
      <PhotoUploadModal taskId={3} onUpload={handleCapture} />

      {/* クエスト　１*/}
      <SpotList x={2} isAccordion={false} />

      <div className="stepleft">
        <Link to="/Page3" style={{ textDecoration: "none", fontSize: "18px" }}>
          <p className="e1">⬅️ Stp1</p>
        </Link>
      </div>
      <div className="setpright">
        <Link to="/Page5" style={{ textDecoration: "none", fontSize: "18px" }}>
          <p className="e1">Stp3 →</p>
        </Link>
      </div>

      <div className="top">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
      </div>
      <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
    </>
  );
}

export default Page4;
