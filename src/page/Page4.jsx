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


function Page4() {
    return(
<>
<div className="top">
        <Top x={2} />
      </div>
<Ttl x={7}></Ttl>

<QuestCotent x={2} />{/* クエスト　１*/}

<SpotList x={2} />

<StepBtn x={0}/>{/* 跳到step1 */}
<StepBtn x={2}/>{/* 跳到step3 */}


<div className="top">
        <ButtonList buttonData={buttonData.filter((btn) => btn.id === "5")} />
      </div>
      <ButtonList buttonData={buttonData.filter((btn) => btn.id === "6")} />

</>
    );
}

export default Page4;
