import React from "react";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate
import Ttl from "../components/4_ttl.jsx";
import HTP from "../components/6_HTP.jsx";
import LGTT from "../components/7_LGTT.jsx";
import ButtonList from "../components/8_btn.jsx";
import "../App.css";
import Header2 from "../components/header2.jsx";
import MV from "../components/2_mainvisual.jsx";
import ImageDivide from "../components/3_ImageDivide.jsx";

function Page1() {
  const navigate = useNavigate(); // 初始化导航函数

  return (
    <>
    <MV/>
    <ImageDivide />
    <Header2 />
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

      <div className="HTP">
        <Ttl x={1} />
        <HTP />
      </div>

      <div className="LGTT">
        <Ttl x={2} />
        <h3 className="LGTT_ttl">
          <p>心をリセットの</p>
          <p>３ステップ</p>
        </h3>
        <img src="/LGTTimg.png" alt="心をリセットの3ステップ" />
        <LGTT />
      </div>

      <div className="gotorest">
        <ButtonList
          x={1}
          onClick={() => {
            console.log("Navigating to page2");
            navigate("/page2");
          }}
        />
      </div>

      <div className="backtop">
        <ButtonList
          x={5}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      </div>

      <div className="more">
        <ButtonList x={2} onClick={()=>navigate("")}/>
      </div>
    </>
  );
}

export default Page1;
