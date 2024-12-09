import React from "react";
import stepDate from "../Date/stepDate.json"; // 确保 JSON 文件路径正确
import { useNavigate } from "react-router-dom"; // 导入 useNavigate 用于导航

const stepBtn = [
  { key: "step1", target: "/Page3" },
  { key: "step2", target: "/Page4" },
  { key: "step3", target: "/Page5" },
];

function Step() {
  const navigate = useNavigate(); // 初始化导航函数

  return (
    <>
      {stepDate.map((step, index) => {
        // 获取对应的按钮目标
        const buttonTarget = stepBtn.find(
          (btn) => btn.key === `step${index + 1}`
        );

        return (
          <div key={index} className="step-container">
            <h2>{step.Ttl}</h2> {/* 渲染副标题 */}
            <h3>{step.sub}</h3> {/* 渲染主标题 */}
            {step.Ttl2 && <h4>{step.Ttl2}</h4>} {/* 条件渲染 Ttl2 */}
            {step.ttl3 && <h5>{step.ttl3}</h5>} {/* 条件渲染 ttl3 */}
            <p>{step.content}</p> {/* 渲染内容 */}
            {/* 动态渲染按钮 */}
            {buttonTarget && (
              <button
                className="step-button"
                onClick={() => navigate(buttonTarget.target)} // 使用 navigate 进行页面跳转
              >
                挑戦
              </button>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Step;
