import React from "react";
// import "../css/ExternalLink.css";

function ExternalLink() {
  const handleClick = () => {
    // 使用 window.open 打开新页面
    window.open("https://trip-quest.jp/#", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="=more" onClick={handleClick}>
      <div className="btn">
        <h4>他のクエストは公式<br />サイトでチェック</h4>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default ExternalLink;