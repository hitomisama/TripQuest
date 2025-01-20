import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Ttl from "../components/4_ttl.jsx";
import HTP from "../components/6_HTP.jsx";
import LGTT from "../components/7_LGTT.jsx";
import "../App.css";
import Header2 from "../components/header2.jsx";
import MV from "../components/2_mainvisual.jsx";
import ImageDivide from "../components/3_ImageDivide.jsx";
import Header from "../components/1_header.jsx";
import ScrollTracker from "../components/ScrollTracker.jsx";
import ScrollToTopButton from "../btn/ScrollToTopButton.jsx";
import ExternalLink from "../btn/ExternalLink.jsx";
import Back from "../components/background.jsx";

function Page1() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null); // 绑定 WTQ 容器
  const [scrollTop, setScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false); // 记录动画是否播放过

  // ✅ 监听滚动事件，更新 `scrollTop`
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollTop(containerRef.current.getBoundingClientRect().top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ 监听 `.WTQ` 是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // 触发动画
          setHasPlayed(true); // 标记动画已经播放过
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const text1 =
    "旅+クエストの形で、一人旅を存分に楽しみながら、心をリセットし、もう一度自分と向き合う機会を提供する特別なサービスです。";
  const text2 =
    "今回は、人間関係や仕事、気遣いに疲れたあなたのために用意したクエストです。都会を離れて、鎌倉で充実した時間を過ごしましょう。";

  const renderTextWithSpans = (text, delayOffset = 0) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className={`fade-char ${hasPlayed ? "once-visible" : ""}`} // 文字动画播放完后，保持可见
        style={{ animationDelay: `${index * 0.05 + delayOffset}s` }}
      >
        {char}
      </span>
    ));

  return (
    <div className="page1-container" ref={containerRef}>
      {/* 主视觉模块 */}
      <div className="fb">
        <div className="bjimage"></div>
        <div className="oneheader">
          <Header scrollTop={scrollTop} />
          <Back scrollTop={scrollTop} />
        </div>
        <MV />
      </div>

      <ImageDivide />
      <Header2 />
      <ScrollTracker />

      {/* 介绍模块 */}
      <div className="WTQ" id="WTQ">
        <Ttl x={0} />
        <div className="WTQ" id="WTQ" ref={sectionRef}>
          <h5 className={`Introduction_pg1 ${isVisible ? "visible" : ""}`}>
            <p>{renderTextWithSpans(text1)}</p>
            <p>{renderTextWithSpans(text2, text1.length * 0.05)}</p>
          </h5>
        </div>
      </div>

      {/* HTP 模块 */}
      <div className="HTP" id="HTP">
        <Ttl x={1} />
        <HTP />
      </div>

      {/* 三步说明模块 */}
      <div className="LGTT">
        <Ttl x={2} />
        <div className="LGTT-content">
          <div className="LGTTleft">
            <img src="LGTTnew.jpg" alt="" className="LGTTnew" />
            <div className="LGTTmoji">
              <h3>心をリセットの</h3>
              <h3>３ステップ</h3>
            </div>
          </div>
          <div className="LGTTright">
            <div className="step">
              <div className="step1">
                <h4>リセット・step1</h4>
                <h5>悩みを手放す</h5>
              </div>
              <div className="step2">
                <h4>リセット・step2</h4>
                <h5>未来への祈り</h5>
              </div>
              <div className="step3">
                <h4>リセット・step3</h4>
                <h5>自分自身と向き合う</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="button-section">
        <div className="gotorest">
          <Link to="/page2" className="btn">
            <h4>
              <span>リセットの旅へ</span>
            </h4>
            <div className="arrow"></div>
          </Link>
        </div>
        <ExternalLink />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Page1;
