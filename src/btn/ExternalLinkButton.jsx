import React from "react";

const ExternalLinkButton = ({ text, link, type }) => {
    const handleClick = () => {
        if (link) window.location.href = link;
    };

    return (
        <button className={type} onClick={handleClick}>
            {text}
        </button>
    );
};

export default ExternalLinkButton;
