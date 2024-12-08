import React from "react";
import ExternalLinkButton from "./btn/ExternalLinkButton";
import NavigateButton from "./btn/NavigateButton";
import OpenWindowButton from "./btn/OpenWindowButton";
import ScrollToTopButton from "./btn/ScrollToTopButton";

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
                            <NavigateButton
                                key={button.id}
                                text={button.text}
                                target={button.target}
                                type={button.type}
                            />
                        );
                    case "externalLink":
                        return (
                            <ExternalLinkButton
                                key={button.id}
                                text={button.text}
                                link={button.link}
                                type={button.type}
                            />
                        );
                    case "openWindow":
                        return (
                            <OpenWindowButton
                                key={button.id}
                                text={button.text}
                                windowUrl={button.windowUrl}
                                type={button.type}
                            />
                        );
                    case "scrollToTop":
                        return (
                            <ScrollToTopButton
                                key={button.id}
                                text={button.text}
                                type={button.type}
                            />
                        );
                    default:
                        return <p key={button.id}>Unknown action: {button.action}</p>;
                }
            })}
        </div>
    );
};

export default ButtonList;
