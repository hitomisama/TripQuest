import React from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import QuestComponent from "../components/QuestComponent.jsx";
import Top from "../components/Top.jsx";
import Header2 from "../components/header2.jsx";
import Ttl from "../components/4_ttl.jsx";
import Accordion from "../components/Accordion.jsx";
import Step from "../components/step.jsx";
import ButtonList from "../components/ButtonList.jsx";

function Page2() {
  const { tasks } = useTaskContext();

  return (
    <div className="page2-container">
      <Top x={0} />
      <Header2 />
      <Ttl x={3} />
      <QuestComponent tasks={tasks} />
      <Step />
      <Accordion />
      <ButtonList buttonData={[{ id: "5", text: "返回顶部", action: "scrollToTop" }]} />
    </div>
  );
}

export default Page2;