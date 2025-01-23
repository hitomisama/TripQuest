import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Menu.css";

function Menu({ isOpen, onClose }) {
  const navigate = useNavigate();

  // 当菜单打开时，禁止页面滚动；关闭时恢复滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 禁止滚动
    } else {
      document.body.style.overflow = ""; // 允许滚动
    }

    return () => {
      document.body.style.overflow = ""; // 组件卸载时恢复滚动
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMenuClick = (path, targetId) => {
    navigate(path, { state: { scrollToId: targetId } });
    onClose(); // 关闭菜单
  };

  return (
    <div className="menu-overlay" onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        {/* 头部 LOGO & 关闭按钮 */}
        {/* <div className="menu_header">
          <Link to="/">
            <img src="/TripQuest.png" alt="TripQuest" className="TripQuest" />
          </Link>
          <Link to="/">
            <img src="/LOGO.png" alt="Logo" className="Logo" />
          </Link>
        </div> */}

        {/* 菜单内容 */}
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

        {/* 社交媒体 */}
        <h4 className="follow">follow us on:</h4>
        <div className="followimg">
          <img src="/X.png" alt="X" className="x" />
          <img src="/Instagram Old.png" alt="Instagram" className="ins" />
          <img src="/LINE.png" alt="LINE" className="line" />
        </div>

        {/* 背景装饰 */}
        <div className="trip">Trip</div>
        <div className="quest">Quest</div>

        {/* 关闭按钮 */}
        <div className="MenuBtn">
        <button className="menu-close" onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;