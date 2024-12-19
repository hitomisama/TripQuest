import React from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../components/TaskContext.jsx";
import Ttl from "../components/4_ttl.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
import buttonData from "../Date/btnDate.json";
import Top from "../components/Top.jsx";
import QuestCotent from "../components/questcontent.jsx";
import SpotList from "../windows/SpotList.jsx";
import LocationList from "../btn/LocationList.jsx";
import Header2 from "../components/header2.jsx";
import Header from "../components/1_header.jsx";
import "../css/page4.css";

function Page4() {
  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (taskId, base64Image) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
    console.log("Updated tasks state:", tasks);
  };

  return (
    <>
      <div className="pg4_mv">
        <Header />
        <div className="top">
          <Top x={2} />
        </div>
      </div>
      <Header2 />
      <Ttl x={7} />
      <LocationList renderId={2} />
      {/* 传递 taskId 和 handleCapture */}
      <QuestCotent x={2} taskId={3} onUpload={handleCapture} />
      <SpotList x={2} isAccordion={false} />

      {/* 跳转按钮 */}
      <div className="pagebtn">
        <Link to="/Page3" className="stepleft">
          <div className="arrowleft"></div>
          <p className="e1">Step1</p>
        </Link>
        <Link to="/Page5" className="stepright">
          <p className="e1">Step3</p>
          <div className="arrowright"></div>
        </Link>
      </div>

      <div>
        <Link to="/" className="pageTop">
          <div className="pageTop-e1">Top</div>
          <img src="/leaf.png" alt="" />
        </Link>
      </div>
    </>
  );
}

export default Page4;
