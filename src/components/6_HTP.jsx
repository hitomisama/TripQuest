import React from "react";
import "../css/Htp.css";

const HtpData = [
  {
    pointNum: "Point 01",
    src: "/p1.png",
    ttl: "クエストを挑戦する",
    content:
      "心をリセットするためのクエストを巡ってみませんか？鎌倉編のクエストをクリアすると、素敵なプレゼントが待っています！",
  },

  {
    pointNum: "Point 02",
    src: "/p2.png",
    ttl: "クリア条件",
    content:
      "クリア条件はクエストごとに異なりますので、クエスト紹介の画面でチェックしてみてください。",
  },

  {
    pointNum: "Point 03",
    src: "/p3.png",
    ttl: "立ち寄りスポット",
    content:
      "今回はメインクエストだけでなく、その近くにある癒しの立ち寄りスポットもご用意しました。メインクエストに挑戦するついでに、ぜひ立ち寄ってみませんか？",
  },

  {
    pointNum: "Tips",
    src: "/p2.png",
    ttl: "旅の感想を記録",
    content:
      "あの時の気持ちを思い出せるように、どんな些細なことでも構いません。ぜひSNSに記録してみてください。",
  },
];

function HTP() {
  return (
    <>
      <section className="HTPContent">
        {HtpData.map((item, index) => (
          <div key={index} className="HTPTtem">
            <div className="point">
              <p className="e1">{item.pointNum}</p>
            </div>
            <img src={item.src} alt="contentimg" />
            <div className="HTPcontent">
            <h4>{item.ttl}</h4>
            <h5>{item.content}</h5>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default HTP;
