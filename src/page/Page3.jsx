import React from "react";
import Ttl from "../components/4_ttl.jsx";
import ButtonList from "../components/ButtonList.jsx";
import "../App.css";
import buttonData from "../Date/btnDate.json";
import Header2 from "../components/header2.jsx";
import Accordion from "../components/Accordion.jsx";
import Step from "../components/step.jsx";
import Top from "../components/Top.jsx";
import QuestComponent from "../components/QuestComponent.jsx";
import QuestCotent from "../components/questcontent.jsx";
import StepBtn from "../btn/ClearBtn.jsx";
import SpotList from "../windows/SpotList.jsx";
import PhotoUploadModal from "../windows/complete.jsx";



function Page3() {
    return(
<>
<div className="top">
        <Top x={1} />
      </div>
<Ttl x={6}></Ttl>

<QuestCotent x={0} />{/* クエスト　１*/}

<QuestCotent x={1} />{/* クエスト　２*/}

<SpotList x={0} isAccordion={true} />

<StepBtn x={2}/>{/* 跳到step3 */}
<StepBtn x={1}/>{/* 跳到step2 */}

<PhotoUploadModal />

<div className="top">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
      </div>
      <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />
</>
    );
}

export default Page3;
