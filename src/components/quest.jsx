import React, { useState } from "react";
import "../css/QuestComponent.css"

const initialTasks = [
  { id: 1, name: "クエスト1", image: null },
  { id: 2, name: "クエスト2", image: null },
  { id: 3, name: "クエスト3", image: null },
  { id: 4, name: "クエスト4", image: null },
  { id: 5, name: "立ち寄りスポット（一つ）", image: null },
];

function QuestComponent() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleUpload = (event, taskId) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, image: reader.result } : task
        );
        setTasks(updatedTasks);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="quest-container">
      {/* 顶部标题 */}
      <div className="quest-title">スペシャル抹茶券</div>

      {/* 任务列表 */}
      <div className="quest-list">
        {tasks.map((task) => (
          <div key={task.id} className="quest-item">
            {task.image ? (
              <img src={task.image} alt={task.name} className="quest-image" />
            ) : (
              <div className="quest-placeholder">{task.name}</div>
            )}
            <label className="upload-button">
              アップロード
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleUpload(e, task.id)}
                style={{ display: "none" }}
              />
            </label>
          </div>
        ))}
      </div>

      {/* 底部说明 */}
      <div className="quest-footer">*クエストの順番は自由</div>
    </div>
  );
}

export default QuestComponent;