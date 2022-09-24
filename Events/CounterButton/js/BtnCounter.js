
import React, { useState } from "react";

function BtnCounter(props) {
    let [clicks, setClicks] = useState(0);
    const handleClick = () => setClicks(++clicks);

    return <button onClick={handleClick}>Clicked {clicks}<br/>time(s)</button>;
}

export default BtnCounter;
