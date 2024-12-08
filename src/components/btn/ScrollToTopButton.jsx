import React from "react";

const ScrollToTopButton = ({ text, type }) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className={type} onClick={handleClick}>
            {text}
        </button>
    );
};

export default ScrollToTopButton;
