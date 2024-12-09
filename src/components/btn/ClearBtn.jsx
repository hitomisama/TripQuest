import React from "react";

// 按钮数据数组
const BtnDate = [
  { ttl: "step 1", target: "/page3" },
  { ttl: "step 2", target: "/page4" },
  { ttl: "step 3", target: "/page5" },
];

function StepBtn({ x }) {
  // 根据传入的索引获取按钮数据
  const buttonData = BtnDate[x];

  // 检查索引是否有效
  if (!buttonData) {
    return <p>Invalid button data for index: {x}</p>;
  }

  // 点击按钮跳转的处理函数
  const handleButtonClick = () => {
    window.location.href = buttonData.target; // 使用 `window.location.href` 跳转页面
  };

  return (
    <button onClick={handleButtonClick}>{buttonData.ttl}</button>
  );
}

export default StepBtn;