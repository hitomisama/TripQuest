import React, { useState } from "react";
import Ttl from "../components/4_ttl.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
import buttonData from "../Date/btnDate.json";
import Header2 from "../components/header2.jsx";
import Accordion from "../components/Accordion.jsx";
import Step from "../components/step.jsx";
import Top from "../components/Top.jsx";
import QuestComponent from "../components/quest.jsx";

function Page2() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "クエスト1", image: null },
    { id: 2, name: "クエスト2", image: null },
    { id: 3, name: "クエスト3", image: null },
    { id: 4, name: "クエスト4", image: null },
    { id: 5, name: "立ち寄りスポット（一つ）", image: null },
  ]);

  const handleCapture = (file, taskId) => {
    const reader = new FileReader();
    reader.onload = () => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, image: reader.result } : task
        )
      );
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="page2-container">
      {/* 顶部内容 */}
      <div className="top">
        <Top x={0} />
      </div>

      <Header2 />

      {/* 标题 */}
      <Ttl x={3} />

      {/* 简介 */}
      <h5 className="introduce">
        クエストを挑戦して、スぺシャル抹茶券を手に入れましょう！
      </h5>

      {/* クエスト组件 */}
      <div className="quest">
        <QuestComponent tasks={tasks} onCapture={handleCapture} />
      </div>

      {/* クエスト一覧 */}
      <h3>クエスト一覧</h3>
      <Ttl x={4} />

      <div className="step_content">
        <Step />
      </div>

      {/* アコーディオン */}
      <Ttl x={5} />
      <div className="accordion">
        <Accordion />
      </div>

      {/* 按钮区域 */}
      <div className="top">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
      </div>
    </div>
  );
}

export default Page2;