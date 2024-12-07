import React from "react";
import ButtonList from "../components/8_btn.jsx";
import stepDate from "../Date/stepDate.json"; // 确保 JSON 文件路径正确

function Step() {
  return (
    <>
      {stepDate.map((step, index) => (
        <div key={index} className="step-container">
          <h2>{step.Ttl}</h2> {/* 渲染副标题 */}
          <h3>{step.sub}</h3> {/* 渲染主标题 */}
          {step.Ttl2 && <h4>{step.Ttl2}</h4>} {/* 条件渲染 Ttl2 */}
          {step.ttl3 && <h5>{step.ttl3}</h5>} {/* 条件渲染 ttl3 */}
          <p>{step.content}</p> {/* 渲染内容 */}
          <ButtonList x={step.btnId} /> {/* 动态渲染按钮 */}
        </div>
      ))}
    </>
  );
}

export default Step;
