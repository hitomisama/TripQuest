import React from "react";
import TopDate from "../Date/headerDate.json"; // 引入 JSON 数据

function Top({x}) {
  
const item = TopDate[x];
  return (
<>
    <h1>{item.ttl}</h1>
    <p className="English">{item.sub}</p>
</>
  );
}

export default Top;