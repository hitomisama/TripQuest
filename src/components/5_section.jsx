import React from "react";
import Ttl from "./4_ttl";
import HTP from "./6_HTP";
import LGTT from "./7_LGTT";

function TopSection() {
  return (
    <>
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
        <Ttl x={1}></Ttl>
        <HTP />
      </div>

      <div className="LGTT">
        <Ttl x={2}></Ttl>
        <h3 className="LGTT_ttl">
          <p>心をリセットの</p>
          <p>３ステップ</p>
        </h3>
        <img src="/LGTTimg.png" alt="" />
        <LGTT />
      </div>
    </>
  );
}

export default TopSection;
