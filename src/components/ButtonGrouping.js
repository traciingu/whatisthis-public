import { useState } from "react";
import Button from "./Button";

const ButtonGrouping = ({ buttons, canSelect = true }) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(canSelect && parseInt(Object.keys(buttons).find((key) => buttons[key]['isSelected'] === true)));

    const handleButtonClick = (e) => {
        e.target.tagName.localeCompare("INPUT") === 0 ?
        setActiveButtonIndex(parseInt(e.target.dataset.index)) :
        e.stopPropagation();
    };

    return (
        <div onClick={canSelect ? handleButtonClick : () => {}}>
            {buttons.map((button, index) => {
                const buttonProps = {
                    value: button.value,
                    className: button.className,
                    isSelected: canSelect && index === activeButtonIndex,
                    index
                };

                if (button.type) {
                    buttonProps['type'] = button.type;
                }

                return (<Button {...buttonProps} />);
            })}
        </div>);
};

export default ButtonGrouping;