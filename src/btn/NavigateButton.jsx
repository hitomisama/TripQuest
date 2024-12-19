import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ text, target, type }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (target) navigate(target);
    };

    return (
        <button className={type} onClick={handleClick}>
            {text}
        </button>
    );
};

export default NavigateButton;
