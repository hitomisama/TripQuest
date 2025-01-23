import React, { useEffect, useState, useRef } from "react";
import "../css/Htp.css";

const HtpData = [
  {
    pointNum: "Point 01",
    src: "/p1.png",
    ttl: "クエストを挑戦する",
    content: "心をリセットするためのクエストを巡ってみませんか？鎌倉編のクエストをクリアすると、素敵なプレゼントが待っています！",
  },
  {
    pointNum: "Point 02",
    src: "/p2.png",
    ttl: "クリア条件",
    content: "クリア条件はクエストごとに異なりますので、クエスト紹介の画面でチェックしてみてください。",
  },
  {
    pointNum: "Point 03",
    src: "/p3.png",
    ttl: "立ち寄りスポット",
    content: "今回はメインクエストだけでなく、その近くにある癒しの立ち寄りスポットもご用意しました。",
  },
  {
    pointNum: "Tips",
    src: "/p2.png",
    ttl: "旅の感想を記録",
    content: "あの時の気持ちを思い出せるように、どんな些細なことでも構いません。ぜひSNSに記録してみてください。",
  },
];

function HTP() {
  const htpRefs = useRef([]); 
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = htpRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => new Set([...prev, index])); 
          }
        });
      },
      { threshold: 0.5 }
    );

    htpRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      htpRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="HTPContent">
      {HtpData.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) htpRefs.current[index] = el;
          }}
          className={`HTPTtem ${visibleItems.has(index) ? "fade-in" : ""}`}
        >
          <div className="htpback">
            <img src={item.src} alt="contentimg" />
            <div className="point">
              <p className="e1">{item.pointNum}</p>
            </div>
            <div className="HTPcontent">
              <h4>
                {item.ttl.split("").map((char, i) => (
                  <span key={i} style={{ "--char-index": i }}>{char}</span>
                ))}
              </h4>
              <h5>
                {item.content.split("").map((char, i) => (
                  <span key={i} style={{ "--char-index": i }}>{char}</span>
                ))}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HTP;