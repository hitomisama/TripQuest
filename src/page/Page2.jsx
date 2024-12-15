import { useTaskContext } from "../components/TaskContext.jsx";
import React, { useEffect } from "react";
import QuestComponent from "../components/QuestComponent.jsx";
import Top from "../components/Top.jsx";
import Header2 from "../components/header2.jsx";
import Ttl from "../components/4_ttl.jsx";
import Accordion from "../components/Accordion.jsx";
import Step from "../components/step.jsx";
import ButtonList from "../components/ButtonList.jsx";
import Header from "../components/1_header.jsx";
import ScrollToTopButton from "../btn/ScrollToTopButton.jsx";
import ExternalLink from "../btn/ExternalLink.jsx";
import "../css/Page2.css";

function Page2() {
  const { tasks } = useTaskContext();
  console.log("Tasks in Page2:", tasks);

  useEffect(() => {
    window.scrollTo(0, 0); // 页面加载时滚动到顶部
  }, []);

  return (
    <div className="page2-container">
      <div className="TTL_mv">
        <Header />
        <Top x={0} />
      </div>
      <Header2 />
      <Ttl x={3} />
      <h5 className="Introduction">クエストを挑戦して、スぺシャル抹茶券を手に入れましょう！</h5>
      <QuestComponent tasks={tasks} />
      <Step />
      <Accordion />
      <ExternalLink />
      <div className="button-section">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Page2;
