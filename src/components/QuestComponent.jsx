import React from "react";
import { useTaskContext } from "../components/TaskContext.jsx";

function QuestComponent() {
  const { tasks } = useTaskContext();

  return (
    <div className="quest-container">
      <div className="quest-title">スペシャル抹茶券</div>
      <div className="quest-list">
        {tasks.map((task) => (
          <div key={task.id} className="quest-item">
            <img
              src={task.image}
              alt={task.name}
              className="quest-image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
      <div className="quest-footer">*クエストの順番は自由</div>
    </div>
  );
}

export default QuestComponent;