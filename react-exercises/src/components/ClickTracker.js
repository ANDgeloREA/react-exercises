import React from "react";
import { useState } from "react";

const ClickTracker = () => {
  const [lastClick, setLastClick] = useState("?");

  const handleLastClick = (event) => {
    setLastClick(event.target.name);
    const buttonColor = document.querySelector(".button-color");
    if(event.target.name === "red") {
        buttonColor.style.color = "red"
    } else if (event.target.name === "blue") {
        buttonColor.style.color = "blue"
    } else if (event.target.name === "green") {
        buttonColor.style.color = "green"
    }
  }

  return (
    <div className="click-tracker">
      <h1>You last clicked the button: <span className="button-color">{lastClick}</span></h1>
      <button name="red" className="red-button" onClick={handleLastClick}>Red</button>
      <button name="blue" className="blue-button" onClick={handleLastClick}>Blue</button>
      <button name="green" className="green-button" onClick={handleLastClick}>Green</button>
    </div>
  );
};

export default ClickTracker;