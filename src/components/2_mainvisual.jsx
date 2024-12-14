import React from "react";
import "../css/MV.css";

function MV() {
  const updatePosition = (scrollPercentage) => {
    const line = document.querySelector(".bdj::after");
    const newHeight = 146 * scrollPercentage; // 根据滚动百分比计算高度
    line.style.height = `${newHeight}px`;
  };
  return (
    <>
      <div className="mv_moji">
        <div className="kamakura">
          <h1 className="kama">鎌</h1>
          <h1 className="kura">倉</h1>
        </div>
        <div className="concept">
          <h3>
            心を<strong id="reset">リセット</strong>する旅
          </h3>
          <h3>いってみませんか？</h3>
        </div>
        <div className="bdj">
          <div className="current-position"></div>{" "}
          {/* 用于表示当前位置的白线 */}
        </div>
      </div>

      {/* 第二部分内容 */}
      <div className="pg2">
        <div className="ttl">
          <h1>リセット</h1>
          <h2>一人でも楽しめる一人旅</h2>
        </div>
        <div className="description">
          <h4>
            <p>都会の喧騒から離れ</p>
            <p>自分自身を見つめ直すための特別な</p>
            <p>心の中に溜まった疲れやストレスをそっと解き放ち</p>
            <p>リセットできる場所へ行きましょう</p>
            <p>新しい自分に出会うためのひとときを過ごしてみませんか？</p>
          </h4>
        </div>
      </div>
    </>
  );
}

export default MV;
