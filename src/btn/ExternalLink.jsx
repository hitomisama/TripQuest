import React from "react";

function ExternalLink() {
  return (
    <>
      <div className="btn">
        <div
          className="more"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4> 他のクエストは公式サイトでチェック</h4>
          <div className="arrow"></div>
        </div>
      </div>
    </>
  );
}

export default ExternalLink;
