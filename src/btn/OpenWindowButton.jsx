import React from "react";

const OpenWindowButton = ({ text, windowUrl, type }) => {
    const handleClick = () => {
        if (windowUrl) {
            window.open(windowUrl, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <button className={type} onClick={handleClick}>
            {text}
        </button>
    );
};

export default OpenWindowButton;
