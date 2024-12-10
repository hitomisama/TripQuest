import React from "react";
import "../css/QuestComponent.css";

function QuestComponent({ tasks }) {
  return (
    <div className="quest-container">
      {/* 顶部标题 */}
      <div className="quest-title">スペシャル抹茶券</div>
      {/* 显示任务列表 */}
      <div className="quest-list">
        {tasks.map((task) => (
          <div key={task.id} className="quest-item">
            {task.image ? (
              <img src={task.image} alt={task.name} className="quest-image" />
            ) : (
              <div className="quest-placeholder">{task.name}</div>
            )}
          </div>
        ))}
      </div>
      {/* 底部说明 */}
      <div className="quest-footer">*クエストの順番は自由</div>
    </div>
  );
}

export default QuestComponent;