
import React from "react";

let enterCounter = 0;
let overCounter = 0;
function HoverEvent () {
    const handleMouseEnter = () => console.log(`Parent hit ${++enterCounter} time(s)`);
    const handleMouseOver = event => {
        if (event.target.id !== "parent") {
            console.log(`Squares hit ${++overCounter} time(s)`);
        }
    }

    return (<div id="parent" onMouseEnter={handleMouseEnter} onMouseOver={handleMouseOver}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>);
}

export default HoverEvent;
