import React, { useState } from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import "../css/QuestComponent.css";
import QRModal from "./QRModal.jsx";

function QuestComponent() {
  const { tasks } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false); // 控制 QRModal 的状态

  // 检查是否所有任务都有照片
  const allTasksCompleted = tasks.every((task) => task.image !== "/LOGO.png");

  return (
    <div className="quest-container">
      <div className="quest-title">
        <h5>スペシャル抹茶券</h5>
      </div>

      {/* 完成信息 */}
      {allTasksCompleted && (
        <h6
          className="quest-clear-message"
          onClick={() => setIsModalOpen(true)} // 点击时打开 QRModal
        >
          全クエストクリア！タップして交換ページを開いてください。
        </h6>
      )}

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
                {task.image !== "/LOGO.png" && (
                  <img
                    src="/ok.png"
                    alt="完成标志"
                    className="ok-image"
                  />
                )}
              </span>
            ) : (
              <span className="quest-label">
                クエスト {index + 1}
                {task.image !== "/LOGO.png" && (
                  <img
                    src="/ok.png"
                    alt="完成标志"
                    className="ok-image"
                  />
                )}
              </span>
            )}
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

      {/* 如果未完成，显示提示 */}
      {!allTasksCompleted && (
        <h6 className="quest-footer">*クエストの順番は自由</h6>
      )}

      {/* QRModal */}
      <QRModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default QuestComponent;