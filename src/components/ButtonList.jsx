import React from "react";
import ExternalLinkButton from "../btn/ExternalLinkButton";
import NavigateButton from "../btn/NavigateButton";
import OpenWindowButton from "../btn/OpenWindowButton";
import ScrollToTopButton from "../btn/ScrollToTopButton";
import "../css/BtnLis.css";

const ButtonList = ({ buttonData = [], filterId, filterAction }) => {
    if (!Array.isArray(buttonData)) {
        console.error("buttonData is not an array:", buttonData);
        return <p>Error: Invalid button data</p>;
    }

    const filteredData = buttonData.filter((button) => {
        if (filterId && button.id !== filterId) return false;
        if (filterAction && button.action !== filterAction) return false;
        return true;
    });

    return (
        <div className="button-list">
            {filteredData.map((button) => {
                switch (button.action) {
                    case "navigate":
                        return (
                            <h4
                                key={button.id}
                                className="navigate-button"
                                onClick={() =>
                                    NavigateButton({
                                        text: button.text,
                                        target: button.target,
                                        type: button.type,
                                    })
                                }
                            >
                                {button.text}
                            </h4>
                        );
                    case "externalLink":
                        return (
                            <h4
                                key={button.id}
                                className="external-link-button"
                                onClick={() =>
                                    ExternalLinkButton({
                                        text: button.text,
                                        link: button.link,
                                        type: button.type,
                                    })
                                }
                            >
                                {button.text}
                            </h4>
                        );
                    case "openWindow":
                        return (
                            <h4
                                key={button.id}
                                className="open-window-button"
                                onClick={() =>
                                    OpenWindowButton({
                                        text: button.text,
                                        windowUrl: button.windowUrl,
                                        type: button.type,
                                    })
                                }
                            >
                                {button.text}
                            </h4>
                        );
                    default:
                        return <h4 key={button.id}>Unknown action: {button.action}</h4>;
                }
            })}
        </div>
    );
};

export default ButtonList;