import React from "react";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate
import Ttl from "../components/4_ttl.jsx";
import HTP from "../components/6_HTP.jsx";
import LGTT from "../components/7_LGTT.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
// import '../css/Page1.css';
import Header2 from "../components/header2.jsx";
import MV from "../components/2_mainvisual.jsx";
import ImageDivide from "../components/3_ImageDivide.jsx";
import buttonData from "../Date/btnDate.json"; // 导入按钮数据
import Header from "../components/1_header.jsx";
import ScrollTracker from "../components/ScrollTracker.jsx";
import ScrollToTopButton from "../btn/ScrollToTopButton.jsx";
import { Link } from "react-router-dom"; // 引入 Link 组件用于跳转
import ExternalLink from "../btn/ExternalLink.jsx";


function Page1() {
  return (
    <div className="page1-container">
      {/* 主视觉模块 */}
      <div className="fb">
        <Header />
        <MV />
      </div>
      <ImageDivide />
      <Header2 />
      <ScrollTracker />
      {/* 介绍模块 */}
      <div className="WTQ">
        <Ttl x={0} />
        <h5>
          <p>
            旅+クエストの形で、一人旅を存分に楽しみながら、心をリセットし、もう一度自分と向き合う機会を提供する特別なサービスです。
          </p>
          <p>
            今回は、人間関係や仕事、気遣いに疲れたあなたのために用意したクエストです。都会を離れて、鎌倉で充実した時間を過ごしましょう。
          </p>
        </h5>
      </div>

      {/* HTP 模块 */}
      <div className="HTP">
        <Ttl x={1} />
        <HTP />
      </div>

      {/* 三步说明模块 */}
      <div className="LGTT">
        <Ttl x={2} />
        {/* <h3 className="LGTT_ttl">
          <p>心をリセットの</p>
          <p>３ステップ</p>
        </h3> */}
        <div className="LGTTcontent">
          {/* <img src="/LGTTimg.png" alt="心をリセットの3ステップ" />
          <img src="/LGTTimg2.png" alt="" /> */}
          {/* <LGTT /> */}
          <img src="/LGTTimg3.png" alt="" />
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="button-section">
      <div className="gotorest">
          <Link to="/page2" className="btn">
           <h4><span>リセットの旅へ</span></h4> 
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
