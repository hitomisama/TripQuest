import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/1_header.jsx";
import Footer from "./components/Footer.jsx";
import Page1 from "./page/Page1.jsx";
import Page2 from "./page/Page2.jsx";
import Page3 from "./page/Page3.jsx";
import Page4 from "./page/Page4.jsx";
import Page5 from "./page/Page5.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "クエスト1", image: null },
    { id: 2, name: "クエスト2", image: null },
    { id: 3, name: "クエスト3", image: null },
    { id: 4, name: "クエスト4", image: null },
    { id: 5, name: "立ち寄りスポット（一つ）", image: null },
  ]);

  const handleCapture = (file, taskId) => {
    const reader = new FileReader();
    reader.onload = () => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, image: reader.result } : task
        )
      );
    };
    reader.readAsDataURL(file);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Page1 tasks={tasks} handleCapture={handleCapture} />}
        />
        <Route
          path="/page2"
          element={<Page2 tasks={tasks} handleCapture={handleCapture} />}
        />
        <Route
          path="/page3"
          element={<Page3 tasks={tasks} handleCapture={handleCapture} />}
        />
        <Route
          path="/page4"
          element={<Page4 tasks={tasks} handleCapture={handleCapture} />}
        />
        <Route
          path="/page5"
          element={<Page5 tasks={tasks} handleCapture={handleCapture} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;