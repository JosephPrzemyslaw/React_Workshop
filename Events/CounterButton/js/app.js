
import React from "react";
import { createRoot } from "react-dom/client";
import BtnCounterNotWorking from "./BtnCounterNotWorking";
import BtnCounter from "./BtnCounter";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
    <div id="parent">
        <BtnCounterNotWorking id="first"/>
        <BtnCounterNotWorking id="second"/>
        <BtnCounterNotWorking id="third"/>
    </div>
    <div id="parent">
        <BtnCounter id="first"/>
        <BtnCounter id="second"/>
        <BtnCounter id="third"/>
    </div>
</>);
