// import React from "react";
// import Ttl from "../components/4_ttl.jsx";
// import ButtonList from "../components/ButtonList.jsx";
// import "../App.css";
// import buttonData from "../Date/btnDate.json";
// import Header2 from "../components/header2.jsx";
// import Accordion from "../components/Accordion.jsx";
// import Step from "../components/step.jsx";
// import Top from "../components/Top.jsx";
// import QuestCotent from "../components/questcontent.jsx";
// import StepBtn from "../btn/ClearBtn.jsx";
// import SpotList from "../windows/SpotList.jsx";
// import PhotoUploadModal from "../windows/complete.jsx";

// function Page3() {
//   return (
//     <>
//       {/* 顶部标题内容 */}
//       <div className="top">
//         <Top x={1} />
//       </div>

//       <Ttl x={6} />

//       {/* クエスト内容展示 */}
//       <div className="quest-section">
//         <QuestCotent x={0} /> {/* 显示任务 1 的内容 */}
//         <QuestCotent x={1} /> {/* 显示任务 2 的内容 */}
//       </div>

//       {/* SpotList 折叠区域 */}
//       <div className="spot-list-section">
//         <SpotList x={0} isAccordion={true} />
//       </div>

//       {/* 跳转到 Step 页面按钮 */}
//       <div className="step-navigation">
//         <StepBtn x={2} /> {/* 跳到 Step3 */}
//         <StepBtn x={1} /> {/* 跳到 Step2 */}
//       </div>

//       {/* 照片上传弹窗 */}
//       <div className="photo-upload-section">
//         <PhotoUploadModal />
//       </div>

//       {/* 页面底部按钮 */}
//       <div className="page-footer">
//         <div className="top">
//           <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
//         </div>
//         <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
//       </div>
//     </>
//   );
// }

// export default Page3;

// import React from "react";
// import { useTaskContext } from "../components/TaskContext.jsx";
// import QuestCotent from "../components/questcontent.jsx";
// import CameraButton from "../btn/CameraButton.jsx";

// function Page3() {
//   const { tasks, setTasks } = useTaskContext();

//   const handleCapture = (file, taskId) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setTasks((prevTasks) =>
//         prevTasks.map((task) =>
//           task.id === taskId ? { ...task, image: reader.result } : task
//         )
//       );
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <QuestCotent x={0} />
//       {tasks.map((task) => (
//         <CameraButton key={task.id} taskId={task.id} onCapture={handleCapture} />
//       ))}
//     </div>
//   );
// }

// export default Page3;

import React from "react";
import { useTaskContext } from "../components/TaskContext.jsx";
import Ttl from "../components/4_ttl.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
import buttonData from "../Date/btnDate.json";
import Top from "../components/Top.jsx";
import QuestCotent from "../components/questcontent.jsx";
import StepBtn from "../btn/ClearBtn.jsx";
import SpotList from "../windows/SpotList.jsx";
import PhotoUploadModal from "../windows/complete.jsx";
import CameraButton from "../btn/CameraButton";

function Page3() {
  const { tasks, setTasks } = useTaskContext();

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
    <>
      <div className="top">
        <Top x={1} />
      </div>
      <Ttl x={6} />
      <div className="quest-section">
        <QuestCotent x={0} />
        <QuestCotent x={1} />
      </div>
      <div>
        {tasks.map((task) => (
          <CameraButton key={task.id} taskId={task.id} onCapture={handleCapture} />
        ))}
      </div>
      <SpotList x={0} isAccordion={true} />
      <StepBtn x={2} />
      <StepBtn x={1} />
      <PhotoUploadModal />
      <div className="page-footer">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
      </div>
    </>
  );
}

export default Page3;