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
    <div className="steps-wrapper">
      {stepDate.map((step, index) => {
        // 获取对应的按钮目标
        const buttonTarget = stepBtn.find(
          (btn) => btn.key === `step${index + 1}`
        );

        return (
          <div key={index} className="step-container">
            {/* 图片部分 */}
            <div className="step-image-container">
              <img src={step.img} alt={step.Ttl} className="step-image" />
            </div>

            {/* 内容部分 */}
            <div className="step-content-moji">
              <div className="step-content">
                <div className="step-container-ttl">
                  <h3>{step.Ttl}</h3>
                  <p className="e1">{step.sub}</p>
                </div>
                <div className="step-container-ttl-sub">
                  {step.Ttl2 && <h4>{step.Ttl2}</h4>}
                  {step.ttl3 && <h4>{step.ttl3}</h4>}
                </div>
                
                <h5>{step.content}</h5>

                <div className="stepBtn">
                  {buttonTarget && (
                    <div
                      className="btn"
                      onClick={() => navigate(buttonTarget.target)}
                    >
                      <h4>挑戦</h4>
                      <div className="arrow"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Step;
