import React from "react";

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
  { id: 6, main: "長谷寺", className: "ttl" },
  {
    id: 7,
    main: "錢洗弁財天",
    main2: "宇賀福神社",
    className: "ttl",
  },
  { id: 8, main: "報國寺", className: "ttl" },
];

function Ttl({ x }) {
  const {
    main,
    sub,
    sub2,
    main2,
    btn,
    className: mainClass,
  } = ttl_moji[x] || {};

  if (!ttl_moji[x]) {
    return <p>Invalid ID: {x}</p>;
  }

  return (
    <div className={`ttl-container ${mainClass}`}>
      <h2>{main}</h2>
      {main2 && <h2 className="main2">{main2}</h2>}
      {sub && <h3 className="sub">{sub}</h3>}
      {sub2 && <h3 className="sub2">{sub2}</h3>}
    </div>
  );
}

export default Ttl;
