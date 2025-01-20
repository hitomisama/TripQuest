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
import '../css/page5.css';

function Page5() {
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
    <div className="pg5_mv">
    <Header />
      <div className="top">
      <img src="/step3.png" alt="" className="TTL_mv_img"/>

        <Top x={3} />
      </div>
    </div>

      <Header2 />
      <Ttl x={8} />
      <LocationList renderId={2} />
      {/* 传递 taskId 和 handleCapture */}
      <QuestCotent x={3} taskId={4} onUpload={handleCapture} />
      <SpotList x={3} />

      {/* 跳转按钮 */}
      <div className="pagebtn">
      <Link to="/Page4" className="stepleft">
        <div className="arrowleft"></div>
          <p className="e1">Step2</p>
        </Link>
        <Link to="/Page3" className="stepright">
          <p className="e1">Step1</p>
          <div className="arrowright"></div>
        </Link>
      </div>
      
      <div >
        <Link to='/' className="pageTop">
          <div className="pageTop-e1">Top</div>
          <img src="/leaf.png" alt="" />
        </Link>
      </div>    
      </>
  );
}

export default Page5;