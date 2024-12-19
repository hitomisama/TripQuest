import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Menu.css";

function Menu({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null; // 如果菜单未打开，不渲染组件

  const handleMenuClick = (path, targetId) => {
    navigate(path, { state: { scrollToId: targetId } }); // 跳转到目标页面并传递滚动位置
    onClose(); // 关闭菜单
  };

  return (
    <div className="menu-overlay" onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="menuttl">旅・リセット</h1>
        <h4 className="menulink" onClick={() => handleMenuClick("/", "WTQ")}>
          TripQuestとは?
        </h4>
        <h4 className="menulink" onClick={() => handleMenuClick("/page2", "startReset")}>
          リセットを始めよう
        </h4>
        <h5 className="menulink" onClick={() => handleMenuClick("/page2", "questList")}>
          クエスト一覧
        </h5>
        <h5 className="menulink" onClick={() => handleMenuClick("/page2", "threeSteps")}>
          リセットの３ステップ
        </h5>
        <h6 onClick={() => handleMenuClick("/page3")}>STEP1</h6>
        <h6 onClick={() => handleMenuClick("/page4")}>STEP2</h6>
        <h6 onClick={() => handleMenuClick("/page5")}>STEP3</h6>
        <h4 className="follow">follow us on:</h4>
        <div className="followimg">
          <img src="/X.png" alt="" className="x" />
          <img src="/Instagram Old.png" alt="" className="ins" />
          <img src="/LINE.png" alt="" className="line" />
        </div>
        <div className="trip">Trip</div>
        <div className="quest">Quest</div>
        <button className="menu-close" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
}

export default Menu;