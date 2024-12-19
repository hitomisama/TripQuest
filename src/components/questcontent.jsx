import React from "react";
import questDate from "../Date/questDate.json";
import "../css/QuestCotent.css";
import PhotoUploadModal from "../windows/PhotoUploadModal";

function QuestCotent({ x, taskId, onUpload }) {
  const item = questDate[x];

  return (
    <div className="quest-content-container">
      <div className="QuestCotent-img-wrapper">
        <h4 className="QuestCotent-quest">{item.quest}</h4>
        <img className="QuestCotent-img" src={item.img} alt={item.quest} />
        {/* 将内容部分嵌套在图片容器中 */}
        <div className="questcontent">
          <h4 className="QuestCotent-ttl">
            {item.ttl}
            {/* {item.subttl && (
              <h4> {item.subttl}</h4>
            )} */}
          </h4>
          <h5 className="QuestCotent-content">{item.content}</h5>
          <PhotoUploadModal taskId={taskId} onUpload={onUpload} />
        </div>
      </div>
    </div>
  );
}

export default QuestCotent;