
import React, { useState } from "react";

let counter = 0;
function BtnCounterNotWorking(props) {
    const handleClick = () => console.log(`Button ${props.id} clicked ${++counter} time(s)`);

    return <button onClick={handleClick}>Click me !</button>;
}

export default BtnCounterNotWorking;
