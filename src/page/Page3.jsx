import React, { useEffect } from "react";
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
import "../css/page3.css";

function Page3() {
  
  const { tasks, setTasks } = useTaskContext();

  const handleCapture = (taskId, base64Image) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, image: base64Image } : task
      )
    );
    console.log("Updated tasks state:", tasks);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 页面加载时滚动到顶部
  }, []);

  return (
    <>
      <div className="pg3_mv">
        <Header />
        <div className="top">
          <Top x={1} />
        </div>
      </div>
      <Header2 />

      <Ttl x={6} />
      <LocationList renderId={1} />

      {/* 任务区域 */}
      <div className="quest-section">
        <QuestCotent x={0} taskId={1} onUpload={handleCapture} />
        <QuestCotent x={1} taskId={2} onUpload={handleCapture} />
      </div>

      <SpotList x={0} isAccordion={true} />

      {/* 跳转按钮 */}
      <div className="pagebtn">
      <Link to="/Page5" className="stepleft">
        <div className="arrowleft"></div>
          <p className="e1">Step3</p>
        </Link>
        <Link to="/Page4" className="stepright">
          <p className="e1">Step2</p>
          <div className="arrowright"></div>
        </Link>
      </div>

      {/* 页脚 */}
      <div >
        <Link to='/' className="pageTop">
          <div className="pageTop-e1">Top</div>
          <img src="/leaf.png" alt="" />
        </Link>
      </div>
    </>
  );
}

export default Page3;