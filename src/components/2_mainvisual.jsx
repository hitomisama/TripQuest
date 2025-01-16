import React, { useEffect, useState, useRef } from "react";
import "../css/MV.css";

function  MV() {
  const mvmoji2 = useRef(null); // 引用 Header2 元素
  const pageTwo = useRef(null); // 用于占位的元素
  const isshow = useRef(false)
  const [isSticky, setIsSticky] = useState(false); // 是否固定状态
  const updatePosition = (scrollPercentage) => {
    const line = document.querySelector(".bdj::after");
    const newHeight = 146 * scrollPercentage; // 根据滚动百分比计算高度
    line.style.height = `${newHeight}px`;
    console.log(newHeight,'高度：');
    
  };


  useEffect(() => {
    
    const handleScroll = () => {
      const isshows = isshow
      if (pageTwo.current) {
        const headerTop = pageTwo.current.getBoundingClientRect().top; // 获取 Header 的顶部位置
        const placeholderTop = mvmoji2.current.getBoundingClientRect().top; // 占位元素的顶部位置
        
        setIsSticky(headerTop < 1000 && placeholderTop < -100)
        
      }
      
      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.isshow = isshow
    };
  }, []);

// className="mv_moji"  className={isSticky ? 'trueopacity' : 'mv_moji falesopacity'}
  return (
    <>
      <div className={isSticky ? 'mv_moji trueopacity' : 'mv_moji falesopacity'}>
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
      <div className="mv_moji2" ref={mvmoji2}></div>
      {/* 第二部分内容 */}
      <div className="pg2" ref={pageTwo}>
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
