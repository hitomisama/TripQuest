import React from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import "../css/QuestComponent.css";

function QuestComponent() {
  const { tasks } = useTaskContext();

  // 检查是否所有任务都有照片
  const allTasksCompleted = tasks.every((task) => task.image !== "/LOGO.png");

  return (
    <div className="quest-container">
      <div className="quest-title">
        <h5>スペシャル抹茶券</h5>
      </div>

      {/* 照片显示区域 */}
      <div
        className={`quest-list ${allTasksCompleted ? "completed-overlay" : ""}`}
      >
        {tasks.map((task, index) => (
          <div key={task.id} className="quest-item">
            {/* 标号与特殊名称 */}
            {index === 4 ? (
              <span className="quest-label">立ち寄りスポット<br />（一つ）</span>
            ) : (
              <span className="quest-label">クエスト {index + 1}</span>
            )}
            {/* 图片 */}
            <div
              className={`quest-image-container ${
                task.image === "/LOGO.png" ? "placeholder" : ""
              }`}
            >
              <img
                src={task.image}
                alt={task.name}
                className="quest-image"
              />
            </div>
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