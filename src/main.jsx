import { StrictMode } from "react"; // 严格模式，用于捕获潜在问题
import { createRoot } from "react-dom/client"; // React 18 的渲染 API
import App from "./App.jsx"; // 引入主组件 App

// 将 React 渲染到 HTML 中的 root 节点
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);