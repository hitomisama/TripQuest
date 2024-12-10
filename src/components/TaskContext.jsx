import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? JSON.parse(storedTasks)
      : [
          { id: 1, name: "クエスト1", image: null },
          { id: 2, name: "クエスト2", image: null },
          { id: 3, name: "クエスト3", image: null },
          { id: 4, name: "クエスト4", image: null },
          { id: 5, name: "立ち寄りスポット（一つ）", image: null },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);