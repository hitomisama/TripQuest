import React from "react";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate
import Ttl from "../components/4_ttl.jsx";
import HTP from "../components/6_HTP.jsx";
import LGTT from "../components/7_LGTT.jsx";
import ButtonList from "../components/8_btn.jsx";
import Top from "../components/Top.jsx";
import QuestComponent from "../components/quest(开发中）.jsx";
import Step from "../components/step.jsx";
import Accordion from "../components/Accordion(开发中）.jsx";

function Page2() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // 滚动到页面顶部
      behavior: "smooth", // 使用平滑滚动
    });
  };
  return (
    <>
      <div className="top">
        <Top x={0} />
      </div>

      <Ttl x={3} />

      <h5 className="introduce">
        クエストを挑戦して、スぺシャル抹茶券を手に入れましょう！
      </h5>
      <div className="quest">
        <QuestComponent />
      </div>
      <h3>クエスト一覧</h3>

      <Ttl x={4} />

      <div className="step_content">
        <Step />
      </div>

      <Ttl x={5} />

      <Accordion />
      <div className="backtop">
        <ButtonList
          x={5}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      </div>

      <div className="more">
        <ButtonList x={2} onClick={() => navigate("")} />
      </div>
    </>
  );
}

export default Page2;
