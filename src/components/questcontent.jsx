import React from "react";
import questDate from "../Date/questDate.json";



function QuestCotent({ x }) {
  const item = questDate[x];

  return (
    <>
      <h4>{item.quest}</h4>
      <img src={item.img} alt={item.quest} />
      <h4>{item.ttl}</h4>
      <h5>{item.content}</h5>
      </>
  );
}

export default QuestCotent;
