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
          <div
            key={task.id}
            className={`quest-item ${task.image !== "/LOGO.png" ? "uploaded" : ""}`}
          >
            {/* 标号与特殊名称 */}
            {index === 4 ? (
              <span className="quest-label">
                立ち寄りスポット<br />（一つ）
                {/* 上传图片后显示 ok.png */}
                {task.image !== "/LOGO.png" && (
                  <img
                    src="/ok.png" // 指定的图片路径
                    alt="完成标志"
                    className="ok-image"
                  />
                )}
              </span>
            ) : (
              <span className="quest-label">
                クエスト {index + 1}
                {/* 上传图片后显示 ok.png */}
                {task.image !== "/LOGO.png" && (
                  <img
                    src="/ok.png" // 指定的图片路径
                    alt="完成标志"
                    className="ok-image"
                  />
                )}
              </span>
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
                className={`quest-image ${task.image === "/LOGO.png" ? "default" : ""}`}
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
        <h6 className="quest-footer">*クエストの順番は自由</h6>
      )}
    </div>
  );
}

export default QuestComponent;