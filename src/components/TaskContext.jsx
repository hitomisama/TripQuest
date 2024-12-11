import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // 默认图片路径
  const defaultImage = "/LOGO.png";

  // 定义任务列表，未上传时使用默认图片
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