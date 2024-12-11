import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const defaultImage = "/LOGO.png";

  const [tasks, setTasks] = useState([
    { id: 1, name: "クエスト1", image: defaultImage },
    { id: 2, name: "クエスト2", image: defaultImage },
    { id: 3, name: "クエスト3", image: defaultImage },
    { id: 4, name: "クエスト4", image: defaultImage },
    { id: 5, name: "立ち寄りスポット（一つ）", image: defaultImage },
  ]);

  console.log("Current tasks state:", tasks);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);