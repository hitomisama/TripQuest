import React from "react";
import { useTaskContext } from "../components/TaskContext.jsx";

function QuestComponent() {
  const { tasks } = useTaskContext();

  // 检查是否所有任务都有照片
  const allTasksCompleted = tasks.every((task) => task.image !== "/LOGO.png");

  return (
    <div className="quest-container">
      <div className="quest-title">スペシャル抹茶券</div>

      {/* 照片显示区域 */}
      <div className="quest-list">
        {tasks.map((task) => (
          <div key={task.id} className="quest-item">
            <img
              src={task.image}
              alt={task.name}
              className="quest-image"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        ))}
      </div>

      {/* 完成信息 */}
      {allTasksCompleted ? (
        <div className="quest-clear-message">
          全クエストクリア！タップして交換ページを開いてください。
        </div>
      ) : (
        <div className="quest-footer">*クエストの順番は自由</div>
      )}
    </div>
  );
}

export default QuestComponent;