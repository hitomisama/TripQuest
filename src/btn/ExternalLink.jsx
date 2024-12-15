import React from "react";
import "../css/ExternalLink.css";

function ExternalLink() {
  const handleClick = () => {
    // 使用 window.open 打开新页面
    // window.open("https://www.baidu.com", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="btn_more" onClick={handleClick}>
      <div className="more">
        <h4>他のクエストは公式サイトでチェック</h4>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default ExternalLink;