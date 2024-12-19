import React from "react";

function Button({ text, line, onClick, type }) {
    const buttonClass = `custom-button ${type || "default"}`; // 动态样式类
  
    return (
      <button className={buttonClass} onClick={onClick}>
        {line && <img src={line} alt="icon" className="button-icon" />}
        {text}
      </button>
    );
  }
  
  export default Button;