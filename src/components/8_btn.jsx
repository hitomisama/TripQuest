import React from "react";
import Button from "./button"; // 导入按钮组件
import buttonData from "../Date/btnDate.json"; // 引入 JSON 数据
import { useNavigate } from "react-router-dom"; // 用于页面跳转

function ButtonList({ x }) {
  const navigate = useNavigate(); // 初始化导航函数

  const selectedButton = buttonData.find((item) => item.id === String(x));

  if (!selectedButton) {
    return <p>Invalid Button ID: {x}</p>;
  }

  // 根据 action 字段执行不同逻辑
  const handleClick = () => {
    switch (selectedButton.action) {
      case "navigate":
        if (selectedButton.target) {
          navigate(selectedButton.target); // 跳转到指定界面
        }
        break;
      case "externalLink":
        if (selectedButton.link) {
          window.location.href = selectedButton.link; // 跳转到外部链接
        }
        break;
      case "openWindow":
        if (selectedButton.windowUrl) {
          window.open(selectedButton.windowUrl, "_blank", "noopener,noreferrer"); // 打开新窗口
        }
        break;
      case "scrollToTop":
        window.scrollTo({ top: 0, behavior: "smooth" }); // 平滑滚动回到顶部
        break;
      default:
        console.log("Unknown action:", selectedButton.action);
    }
  };

  return (
    <div className="button-list">
      <Button
        text={selectedButton.text}
        line={selectedButton.line}
        onClick={handleClick}
        type={selectedButton.type}
      />
    </div>
  );
}

export default ButtonList;