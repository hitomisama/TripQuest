import React from "react";

// 数据数组
const ttl_moji = [
  {
    id: 0,
    main: "TripQuestとは？",
    sub: "What is",
    sub2: "TripQuest",
    className: "ttl",
  },
  {
    id: 1,
    main: "クエストを楽しむ",
    main2: "ガイド",
    sub: "How to",
    sub2: "Play",
    className: "ttl",
  },
  {
    id: 2,
    main: "旅に出よう",
    sub: "Let's",
    sub2: "Go to Travel",
    className: "ttl",
  },
  {
    id: 3,
    main: "リセットを始めよう",
    sub: "Rest",
    sub2: "Start",
    className: "ttl",
  },
  {
    id: 4,
    main: "リセットの３ステップ",
    sub: "Rest",
    sub2: "3 step",
    className: "ttl",
  },
  {
    id: 5,
    main: "立ち寄りスポット",
    sub: "Stopover",
    sub2: "Spot",
    className: "ttl",
  },
  {
    id: 6,
    main: "長谷寺",
    btn: "出発",
    className: "ttl",
  },
  {
    id: 7,
    main: "錢洗弁財天",
    main2: "宇賀福神社",
    sub: "",
    btn: "出発",
    className: "ttl",
  },
  {
    id: 8,
    main: "報國寺",
    sub: "",
    btn: "出発",
    className: "ttl",
  },
];

function Ttl({ x }) {
  // 从 Ttl 中提取第 x 个对象的数据
  const { main, sub, sub2, main2, btn, class: mainClass } = ttl_moji[x] || {};

  if (!ttl_moji[x]) {
    // 如果传入的 x 对应的数据无效，则返回错误提示
    return <p>Invalid ID: {x}</p>;
  }

  return (
    <>
      {/* 渲染副标题内容 */}
      {/* <p>{sub || "No subtitle available"}</p> */}

      {/* 渲染主标题 */}
      <h2 className={mainClass || ""}>
        {main} {/* 主标题 */}
      </h2>
      <h2>
        {main2 && <span className="main2">{main2}</span>} {/* 渲染 main2 */}
      </h2>
      <h3 className="sub">{sub}</h3>
      <h3 className="sub2">{sub2}</h3>
      <h3>
        {btn && <button className="btn">{btn}</button>} {/* 渲染按钮 */}
      </h3>
    </>
  );
}

export default Ttl;
