import React from "react";
const LGTTData = [
  { ttl: "リセット・step1", sub: "悩みを手放す" },
  { ttl: "リセット・step2", sub: "未来への祈り" },
  { ttl: "リセット・step3", sub: "自分自身と向き合う" },
];

function LGTT() {
  return <>
<section className="LGTTContent">
    {LGTTData.map((item,index)=>(
    <div key={index} className="LGTTitem">
        <h3>{item.ttl}</h3>
        <h5>{item.sub}</h5>
    </div>
    ))}
</section>
  </>;
}

export default LGTT;
