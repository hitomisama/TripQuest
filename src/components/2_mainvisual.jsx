import React from "react";
import '../css/MV.css'

function MV() {
  return (
    <>
      <div className="mv_moji">
        <div className="kamakura">
        <h1 className="kama">鎌</h1>
        <h1 className="kura">倉</h1>
        </div>
        <div className="concept">
          <h3>
            心を<strong id="reset"><h1>リセット</h1></strong>する旅
          </h3>
          <h3>いってみませんか？</h3>
        </div>
      </div>

      {/* 第二部分内容 */}
      <div className="pg2">
        <h1>リセット</h1>
        <h2>一人でも楽しめる一人旅</h2>
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
